import { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths =
      await client.fetch<{ href: string; _updatedAt: string }[]>(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://prizmaacademy.com/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths: MetadataRoute.Sitemap = paths.map((path) => ({
      url: new URL(path.href, baseUrl).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    }));

    const staticUrls = [
      "/",

      "/courses",

      "/online-german-course-in-bangalore",

      "/online-french-course-in-bangalore",

      "/online-spanish-course-in-bangalore",

      "/online-italian-course-in-bangalore",

      "/about-us",

      "/blog",

      "/contact-us",

      "/online-a1-german-course-in-bangalore",

      "/online-a1-french-course-in-bangalore",

      "/online-a1-spanish-course-in-bangalore",

      "/online-a1-italian-course-in-bangalore",

      "/online-a2-spanish-course-in-bangalore",

      "/online-b1-spanish-course-in-bangalore",

      "/online-b2-spanish-course-in-bangalore",

      "/online-c1-spanish-course-in-bangalore",

      "/online-c2-spanish-course-in-bangalore",

      "/online-a2-german-course-in-bangalore",

      "/online-b1-german-course-in-bangalore",

      "/online-b2-german-course-in-bangalore",

      "/online-c1-german-course-in-bangalore",

      "/online-c2-german-course-in-bangalore",

      "/online-a2-italian-course-in-bangalore",

      "/online-b1-italian-course-in-bangalore",

      "/online-b2-italian-course-in-bangalore",

      "/online-c1-italian-course-in-bangalore",

      "/online-c2-italian-course-in-bangalore",

      "/online-a2-french-course-in-bangalore",

      "/online-b1-french-course-in-bangalore",

      "/online-b2-french-course-in-bangalore",

      "/online-c1-french-course-in-bangalore",

      "/online-c2-french-course-in-bangalore",

      "/other-services",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    }));

    return [...dynamicPaths, ...staticUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
