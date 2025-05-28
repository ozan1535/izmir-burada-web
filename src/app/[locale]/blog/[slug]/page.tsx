import React from "react";
import { PrismaClient } from "@/generated/prisma";
import Image from "next/image";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata } from "@/utils/helpers";

const prisma = new PrismaClient();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const blogItem = await prisma.blog.findFirst({
    where: {
      slug: {
        path: [locale],
        equals: slug,
      },
    },
  });

  return createMetadata(
    `${blogItem?.title[locale] as string} - İzmir Burada`,
    blogItem?.description[locale] as string,
    (blogItem?.tags as string) || "",
    blogItem?.media as string,
    blogItem?.slug[locale] as string
  );
}

async function page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const blogItem = await prisma.blog.findFirst({
    where: {
      slug: {
        path: [locale],
        equals: slug,
      },
    },
  });

  if (!blogItem) {
    return (
      <div className="w-full h-[80vh]">
        <p className="mt-20">Blog not found in this language</p>
      </div>
    );
  }

  return (
    <PageTemplate shouldRenderTitle={false}>
      <div className="w-full mx-auto">
        <div className="relative w-full max-w-screen-xl mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] aspect-[3/2]">
          {/* Image with reduced height and 2:3 aspect ratio */}
          <Image
            src={blogItem?.media as string}
            alt={blogItem?.title[locale] || "Cover Image"}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Title below image with padding */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            {blogItem?.title[locale]}
          </h1>
        </div>
      </div>

      {/* Blog content */}
      <div className="my-10 px-4 md:px-20">
        <div
          className="prose max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: blogItem?.content[locale] || "" }}
        />
      </div>
    </PageTemplate>
  );
}

export default page;
