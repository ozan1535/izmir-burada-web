import BlogCard from "@/components/BlogCard/BlogCard";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata } from "@/utils/helpers";
import { PrismaClient } from "@/generated/prisma";
import Link from "next/link";

export async function generateMetadata() {
  return createMetadata(
    "Blog - İzmir Burada",
    "İzmir ile ilgili en güncel haberler, gezilecek yerler, etkinlikler ve yerel yaşam hakkında yazılar. İzmir Burada Blog, şehri keşfetmek isteyenlere ilham verir.",
    "İzmir blog, İzmir haberleri, İzmir gezilecek yerler, İzmir etkinlikleri, İzmir yaşam, İzmir seyahat rehberi, İzmir Burada blog, İzmir kültür, İzmir keşif",
    "/assets/izmirMainPictures/alacati.webp",
    "/blog"
  );
}

const prisma = new PrismaClient();
const PAGE_SIZE = 12;

async function page({ params, searchParams }) {
  const { locale } = await params;

  const currentPage = parseInt(searchParams.page || "1", 10);
  const skip = (currentPage - 1) * PAGE_SIZE;

  const [blogItems, totalCount] = await Promise.all([
    prisma.blog.findMany({
      skip,
      take: PAGE_SIZE,
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.blog.count(),
  ]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  return (
    <PageTemplate title={"Blog"}>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogItems.map((item) => (
          <BlogCard
            imageSource={item.media}
            title={item.title[locale]}
            description={item.description[locale]}
            link={`/${locale}/blog/${item.slug[locale]}`}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        <Link
          href={`?page=${Math.max(currentPage - 1, 1)}`}
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "opacity-50 pointer-events-none cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          ←
        </Link>

        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`?page=${i + 1}`}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1
                ? "bg-gray-800 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </Link>
        ))}

        <Link
          href={`?page=${Math.min(currentPage + 1, totalPages)}`}
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages
              ? "opacity-50 pointer-events-none cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          →
        </Link>
      </div>
    </PageTemplate>
  );
}

export default page;
