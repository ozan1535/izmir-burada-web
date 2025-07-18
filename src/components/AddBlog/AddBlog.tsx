"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const QuillEditor = dynamic(
  () => import("@/components/QuillEditor/QuillEditor"),
  {
    ssr: false,
  }
);

export default function AddBlog() {
  const [content, setContent] = useState("");

  return (
    <div>
      <QuillEditor setContent={setContent} />
    </div>
  );
}
