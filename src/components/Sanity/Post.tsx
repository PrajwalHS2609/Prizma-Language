"use client"
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { PortableText } from '@portabletext/react';
import BlogAuthor from "../BlogPage/BlogAuthor/BlogAuthor";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  publishedAt?: string;
  faq?: FaqItem[];
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export default function PostContent({
  content,
}: {
  content: PostContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;

  return (
    <div className="blog-wrapper1">
      {/* Main Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={content.title}
        // width={550}
        // height={310}
        // priority
        />
      )}

      <div className="blogHead-content">
        <h1>{content.title}</h1>

        {content.publishedAt && (
          <p className="postPublished-date">
            📅{" "}
            {new Date(content.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {/* Carousel */}


        {/* Blog Body */}
        <PortableText
          value={content.body}
          components={portableTextComponents}
        />
      </div>
      <BlogAuthor slug={content.slug.current} />

    </div>

  );
}
