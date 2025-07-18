import { createClient } from "@supabase/supabase-js";

// Supabase client initialization
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

// Load folder names from Supabase storage
export const loadFolders = async () => {
  const { data } = await supabase.storage.from("izmir-burada").list("");
  return data?.filter((f) => f.name !== ".emptyFolderPlaceholder") || [];
};

// Load image URLs from a specific folder
export const loadImages = async (folderName) => {
  const { data, error } = await supabase.storage
    .from("izmir-burada")
    .list(folderName);

  if (error) return [];

  return data.map(
    (file) =>
      supabase.storage
        .from(`izmir-burada/${folderName}`)
        .getPublicUrl(file.name).data.publicUrl
  );
};

// Insert image into Quill editor
export const insertImage = (quillRef, url) => {
  const range = quillRef?.current?.getSelection(true);
  quillRef?.current?.insertEmbed(range?.index || 0, "image", url);
  quillRef?.current?.setSelection((range?.index || 0) + 1);
};

export const generateSlug = (title) => {
  const charMap = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
    ß: "ss",
  };

  // Function to replace Turkish/German specific characters
  const removeSpecialChars = (str) => {
    return str
      .split("")
      .map((char) => charMap[char] || char)
      .join("");
  };

  // Generate the slug
  const slug = removeSpecialChars(title)
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9\-!*%()]/g, ""); // Keep only alphanumeric, hyphens, and the allowed special characters

  return slug;
};
