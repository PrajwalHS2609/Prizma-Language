"use client"

import React from "react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import type { PortableTextBlock } from "@portabletext/types";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeReviews from "../HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../HomePage/HomeYoutube/HomeYoutube";
import ContentHeader from "../ContentHeader/ContentHeader";
import { PortableText } from '@portabletext/react';
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export type TableContentItem = {
  title: string;
};
export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string;
  language: string;
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
  tableOfContent?: TableContentItem[];
};

export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  return (
    <div className="main-container service-wrapper1">
      {imageUrl && (
        <ContentHeader
          language={content.language}
          img={imageUrl}
          heading={content.title}
          description=""
        />
      )}

      <h1>{content.title}</h1>

      {content.body1 && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
          </div>
        </div>
      )}

      <div className="head-container">
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />

        {youtubeUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={
                youtubeUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                  : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
              }
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {content.body2 && (
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
                      {content.customTable.headers?.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.customTable.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.cells.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* {Array.isArray(content?.faq) && content.faq.length > 0 && (
            <FaqComponent faqs={content.faq} />
          )} */}
        </div>
      )}
    </div>
  );
}
