import React from "react";

export default function ImageSelectorModal({
  step,
  folders,
  images,
  onClose,
  onFolderSelect,
  onImageSelect,
  canSelectCoverImage,
  setCanSelectCoverImage,
}) {
  return (
    <div className="fixed top-[15%] left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-6 z-50 max-h-[60vh] overflow-y-auto w-[400px] shadow-lg rounded-md">
      <button
        onClick={() => {
          onClose();
          setCanSelectCoverImage(false);
        }}
        className="text-sm text-gray-600 mb-4 hover:underline"
      >
        Close
      </button>

      {step === "folders" ? (
        <>
          <h2 className="text-xl font-bold mb-4">Select a Folder</h2>
          <ul className="space-y-2">
            {folders.map((folder) => (
              <li key={folder.name}>
                <button
                  onClick={() => onFolderSelect(folder.name)}
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-blue-500 hover:text-white transition"
                >
                  {folder.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {images.length === 0 ? (
            <p className="text-sm text-gray-500">No images found.</p>
          ) : (
            images.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`supabase-img-${i}`}
                className="w-24 h-24 object-contain cursor-pointer rounded border border-gray-300 hover:shadow"
                onClick={() => onImageSelect(url, canSelectCoverImage)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
