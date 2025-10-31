import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import HomeReviews from "@/components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "@/components/HomePage/HomeYoutube/HomeYoutube";
import { portableTextComponents } from "./../../components/PortableTextComponents";
import BlogSidebar from "./../../components/BlogPage/BlogSidebar/BlogSidebar";
import "@/components/Styles.css";
import ContentHeader from "./../../components/ContentHeader/ContentHeader";

export const revalidate = 0;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  },
  youtubeVideoUrl
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body1,
  body2,
    customTable {
    title,
    headers,
    rows[] {
      cells
    }
  },
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  },
  youtubeVideoUrl,
    language

}`;

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  author,
  publishedAt,
  description,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
    
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const news =
    !post && !service ? await client.fetch(NEWS_QUERY, { slug }) : null;

  const content = post || service || news;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const news =
    !post && !service
      ? await client.fetch<SanityDocument>(NEWS_QUERY, { slug })
      : null;

  const content = post || service || news;
  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const youtubeUrl = content?.youtubeVideoUrl || null;

  const isPost = !!post;
  const isService = !!service;
  const isNews = !!news;

  const body = isService
    ? content?.body1 || content?.body2
    : content?.body || [];
  const videoIndex = 2;

  return (
    <div className={isNews || isPost ? "blog-container" : "main-container"}>
      <div className={isNews || isPost ? "blog-wrapper1" : "service-wrapper1"}>
        {(isPost || isNews) && imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "Content Image"}
            width={550}
            height={310}
          />
        )}

        {isService && imageUrl && (
          <ContentHeader
            language={content.language}
            img={imageUrl}
            heading={content.title}
            description=""
          />
        )}

        <h1
          className={isNews || isPost ? "blogHead-content" : "head-container"}
        >
          {content.title}
        </h1>

        {isNews && content.publishedAt && content.author && (
          <b className="published-date">
            Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
            by {content.author}
          </b>
        )}

        {/* Main Body with optional YouTube insert */}
        <div
          className={isNews || isPost ? "blogHead-content" : "head-container"}
        >
          {Array.isArray(body) &&
            body.map((block, index) => {
              if (index === videoIndex) {
                return (
                  <React.Fragment key={`block-${index}`}>
                    <PortableText
                      value={block}
                      components={portableTextComponents}
                    />
                  </React.Fragment>
                );
              }

              return (
                <PortableText
                  key={`block-${index}`}
                  value={block}
                  components={portableTextComponents}
                />
              );
            })}
        </div>
        {/* {isPost && <FaqComponent />} */}

        {/* body1 and body2 (optional) for Services only */}
        {isService && (
          <>
            <div className="head-container">
              {youtubeUrl && (
                <div className="youtube-container">
                  <iframe
                    src={
                      youtubeUrl.includes("youtu.be")
                        ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                        : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
                    }
                    title={content.title || "YouTube Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <HomeWhy />
              <HomeReviews />
              <HomeYoutube />{" "}
            </div>
            {Array.isArray(content.body2) && (
              <div className="slugContent-wrapper">
                <div className="slugContent-container">
                  <PortableText
                    value={content.body2}
                    components={portableTextComponents}
                  />
                  {content.customTable && (
                    <div className="custom-table">
                      {content.customTable.title && (
                        <h3>{content.customTable.title}</h3>
                      )}
                      <table>
                        <thead>
                          <tr>
                            {content.customTable.headers?.map(
                              (header: string, idx: number) => (
                                <th key={idx}>{header}</th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {content.customTable.rows?.map(
                            (row: { cells: string[] }, rowIndex: number) => (
                              <tr key={rowIndex}>
                                {row.cells.map((cell, cellIndex) => (
                                  <td key={cellIndex}>{cell}</td>
                                ))}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                {/* <FaqComponent /> */}
              </div>
            )}
          </>
        )}
      </div>

      {(isPost || isNews) && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}
