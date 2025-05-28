/* import BlogCard from "@/components/BlogCard/BlogCard";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { blogs } from "@/utils/blogs";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Blog - İzmir Burada",
    "İzmir ile ilgili en güncel haberler, gezilecek yerler, etkinlikler ve yerel yaşam hakkında yazılar. İzmir Burada Blog, şehri keşfetmek isteyenlere ilham verir.",
    "İzmir blog, İzmir haberleri, İzmir gezilecek yerler, İzmir etkinlikleri, İzmir yaşam, İzmir seyahat rehberi, İzmir Burada blog, İzmir kültür, İzmir keşif",
    "/assets/izmirMainPictures/alacati.webp",
    "/blog"
  );
}

function page() {
  return (
    <PageTemplate title={"Blog"}>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((item) => (
          <BlogCard
            imageSource={item.coverImage}
            title={item.title}
            description={item.description}
            link={`/blog/${item.slug}`}
            key={item.id}
          />
        ))}
      </div>
    </PageTemplate>
  );
}

export default page;
 */

import BlogCard from "@/components/BlogCard/BlogCard";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { blogs } from "@/utils/blogs";
import { createMetadata } from "@/utils/helpers";
import { PrismaClient } from "@/generated/prisma";

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

async function page({ params }) {
  const { locale } = await params;
  const blogItems = await prisma.blog.findMany();

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
    </PageTemplate>
  );
}

export default page;
