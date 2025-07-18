import { PrismaClient, Prisma } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function POST(req, res) {
  const resp = await req.json();
  if (req.method === "POST") {
    try {
      if (!resp) {
        return res.status(400).json({ error: "No data found in request body" });
      }

      const blog = await prisma.blog.create({
        data: {
          id: resp.id,
          description: resp.description,
          title: resp.title,
          slug: resp.slug,
          content: resp.content,
          media: resp.media,
          isBlogPage: resp.isBlogPage,
        },
      });

      return Response.json(blog);
    } catch (error) {
      return Response.json({
        error: "Failed to create blog",
        details: error.message,
      });
    }
  } else {
    return Response.json({ error: "Failed to create blog" });
  }
}
