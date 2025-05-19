import Link from "next/link";
import React from "react";
import { IBlogCard } from "./BlogCard.types";

function BlogCard({ imageSource, title, description, link }: IBlogCard) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <Link href={link}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={imageSource}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h5 className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-700 transition-colors">
            {title}
          </h5>
        </Link>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          Daha Fazla
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
