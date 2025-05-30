import { PrismaClient } from "@/generated/prisma";
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
const prisma = new PrismaClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = Object.keys(routing.pathnames); // Extract all routes
  const sitemapData: MetadataRoute.Sitemap = [];

  // Fetch all blog items from the database
  const blogItems = await prisma.blog.findMany();

  // Loop through all routes and generate sitemap entries for each locale
  pages.forEach((route) => {
    const locales = routing.pathnames[route]; // This gives you the locale-specific URLs

    Object.keys(locales).forEach((locale) => {
      // Generate the URL for each route with the language prefix
      const url = `https://izmir-burada.com/${locale}${locales[locale]}`;

      sitemapData.push({
        url, // Full URL for the current route and locale
        lastModified: new Date(),
        changeFrequency: "weekly", // Adjust based on the type of page
        priority: 0.8, // Adjust priority if needed
        alternates: {
          [locale]: url,
        },
      });
    });
  });

  // Add dynamic blog pages to the sitemap
  blogItems.forEach((blog) => {
    // For each blog, generate a URL for each locale
    Object.keys(blog.slug).forEach((locale) => {
      const blogUrl = `https://izmir-burada.com/${locale}/blogs/${blog.slug[locale]}`;

      sitemapData.push({
        url: blogUrl, // Full URL for the blog post in the given locale
        lastModified: blog.updatedAt, // Using the updated date of the blog for lastModified
        changeFrequency: "weekly", // Adjust frequency for blog posts
        priority: 1, // Adjust priority if needed
        alternates: {
          tr: `https://izmir-burada.com/tr/blogs/${blog.slug.tr}`,
          en: `https://izmir-burada.com/en/blogs/${blog.slug.en}`,
          de: `https://izmir-burada.com/de/blogs/${blog.slug.de}`,
        },
      });
    });
  });

  return sitemapData;
}
