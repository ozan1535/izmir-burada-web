import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { blogs } from "@/utils/blogs";
import { createMetadata } from "@/utils/helpers";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const singleBlogData = blogs.find((blog) => blog.slug === slug);

  return createMetadata(
    singleBlogData?.title as string,
    singleBlogData?.description as string,
    singleBlogData?.tags,
    singleBlogData?.coverImage as string,
    singleBlogData?.slug as string
  );
}

async function page({ params }) {
  const { slug } = await params;

  const singleBlogData = blogs.find((blog) => blog.slug === slug);

  return (
    <PageTemplate shouldRenderTitle={false}>
      <div className="w-full mx-auto">
        <div className="relative w-full max-w-screen-xl mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] aspect-[3/2]">
          {/* Image with reduced height and 2:3 aspect ratio */}
          <Image
            src={singleBlogData?.coverImage as string}
            alt={singleBlogData?.title || "Cover Image"}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Title below image with padding */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            {singleBlogData?.title}
          </h1>
        </div>
      </div>

      {/* Blog content */}
      <div className="my-10 px-4 md:px-20">
        <div
          className="prose max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: singleBlogData?.content || "" }}
        />
      </div>
    </PageTemplate>
  );
}

export default page;
