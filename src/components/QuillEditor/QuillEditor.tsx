"use client";

import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import ImageSelectorModal from "../ImageSelectorModal/ImageSelectorModal";
import {
  loadFolders,
  loadImages,
  insertImage,
  supabase,
  generateSlug,
} from "./helpers";

export default function QuillEditor({ setContent }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [images, setImages] = useState([]);
  const [folders, setFolders] = useState([]);
  const [modalStep, setModalStep] = useState("folders");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [files, setFiles] = useState([]);
  const [canSelectCoverImage, setCanSelectCoverImage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [data, setData] = useState({
    isBlogPage: true,
    media: "",
    title: { tr: "", en: "", de: "" },
    content: { tr: "", en: "", de: "" },
    description: { tr: "", en: "", de: "" },
  });
  const selectedLanguageRef = useRef(selectedLanguage);

  const { media, title, content, description } = data;

  // Update the ref whenever selectedLanguage changes
  useEffect(() => {
    selectedLanguageRef.current = selectedLanguage;

    if (quillRef.current) {
      const newContent = data.content?.[selectedLanguage] || "";
      quillRef.current.clipboard.dangerouslyPasteHTML(newContent);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Write something...",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "link"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          ["image"],
        ],
      },
    });

    const toolbar = quillRef.current.getModule("toolbar");
    toolbar.addHandler("image", async () => {
      const folders = await loadFolders();
      setFolders(folders);
      setIsModalOpen(true);
      setModalStep("folders");
    });

    quillRef.current.on("text-change", () => {
      const html = editorRef.current.querySelector(".ql-editor")?.innerHTML;
      const lang = selectedLanguageRef.current;
      console.log(lang);
      setData((prev) => ({
        ...prev,
        content: { ...prev.content, [lang]: html },
      }));
    });
  }, [setContent]);

  const handleFolderSelect = async (folderName) => {
    const urls = await loadImages(folderName);
    setImages(urls);
    setModalStep("images");
  };

  const handleImageSelect = (url, canSelectCoverImage) => {
    insertImage(quillRef, url);
    setIsModalOpen(false);
    setModalStep("folders");
    if (canSelectCoverImage) {
      setCanSelectCoverImage(false);
      setData((prev) => ({ ...prev, media: url }));
    }
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const uploadImages = async () => {
    if (!folderName || files.length === 0) {
      alert("Please provide a folder name and select images.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = `${folderName}/${file.name}`;

      const { error } = await supabase.storage
        .from("izmir-burada")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Error uploading file:", file.name, error);
        alert(`Failed to upload ${file.name}`);
        break;
      }
    }
  };

  const languages = ["tr", "en", "de"];

  const saveData = async () => {
    try {
      const response = await fetch("/manage/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 2_147_483_648),
          description,
          title,
          slug: {
            tr: generateSlug(title["tr"]),
            en: generateSlug(title["en"]),
            de: generateSlug(title["de"]),
          },
          content,
          media,
          isBlogPage: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Error saving blog");
      }

      const data = await response.json();

      setImages([]);
      setFolders([]);
      setModalStep("folders");
      setIsModalOpen(false);
      setFolderName("");
      setFiles([]);
      setCanSelectCoverImage(false);
      setSelectedLanguage("tr");
      setData({
        isBlogPage: true,
        media: "",
        title: { tr: "", en: "", de: "" },
        content: { tr: "", en: "", de: "" },
        description: { tr: "", en: "", de: "" },
      });
      console.log("Blog saved successfully", data);
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };
  return (
    <div className="mb-2">
      <div>
        {languages.map((item) => (
          <span
            key={item}
            className={`underline cursor-pointer ${
              selectedLanguage === item ? "text-blue-500" : ""
            }`}
            onClick={() => setSelectedLanguage(item)}
          >
            {item}{" "}
          </span>
        ))}
      </div>

      <h3 className="font-bold">Add images</h3>
      <input
        type="text"
        value={folderName}
        onChange={handleFolderNameChange}
        placeholder="Add images to library (Write folder name with hashes (-)) eg. izmir-antik-kent"
        required
        className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <br />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <br />
      <button onClick={uploadImages}>Upload Images</button>
      <h3 className="font-bold">Title</h3>
      <input
        type="text"
        value={title[selectedLanguage]}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            title: { ...prev.title, [selectedLanguage]: e.target.value },
          }))
        }
        placeholder="Title"
        required
        className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <h3 className="font-bold">Add content</h3>

      <div ref={editorRef} style={{ height: "250px" }} />
      {isModalOpen && (
        <ImageSelectorModal
          step={modalStep}
          folders={folders}
          images={images}
          onClose={() => setIsModalOpen(false)}
          onFolderSelect={handleFolderSelect}
          onImageSelect={handleImageSelect}
          canSelectCoverImage={canSelectCoverImage}
          setCanSelectCoverImage={setCanSelectCoverImage}
        />
      )}
      <h3 className="font-bold">Add description</h3>
      <input
        type="text"
        value={description[selectedLanguage]}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            description: {
              ...prev.description,
              [selectedLanguage]: e.target.value,
            },
          }))
        }
        placeholder="Description"
        required
        className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      <div
        className="cursor-pointer"
        onClick={async () => {
          const folders = await loadFolders();
          setFolders(folders);
          setIsModalOpen(true);
          setModalStep("folders");
          setCanSelectCoverImage(true);
        }}
      >
        <h3 className="font-bold">Select cover image</h3>
        <input
          type="text"
          value={media}
          disabled
          placeholder="Cover image"
          required
          className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>
      <button className="bg-blue-400 p-3" onClick={saveData}>
        Save
      </button>
    </div>
  );
}
