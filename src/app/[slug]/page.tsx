import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page

// import React from "react";
// import { PortableText, type SanityDocument } from "next-sanity";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
// import HomeReviews from "@/components/HomePage/HomeReviews/HomeReviews";
// import HomeYoutube from "@/components/HomePage/HomeYoutube/HomeYoutube";
// import { portableTextComponents } from "@/components/PortableTextComponents";
// import BlogSidebar from "@/components/BlogPage/BlogSidebar/BlogSidebar";
// import "@/components/Styles.css";
// import AboutUsHeader from "@/components/AboutUsPage/AboutUsHeader/AboutUsHeader";
// import { client } from "@/sanity/client";

// export const revalidate = 0;

// // Queries
// const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, body, metaTitle, metaDescription, mainImage{asset->{_id,url}}, youtubeVideoUrl}`;
// const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{_id, title, slug, body1, body2, customTable{title, headers, rows[]{cells}}, metaTitle, metaDescription, mainImage{asset->{_id,url}}, youtubeVideoUrl}`;
// const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{_id, title, slug, body, author, publishedAt, description, metaTitle, metaDescription, mainImage{asset->{_id,url}}}`;

// // Metadata generator
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const { slug } = params;

//   const post = await client.fetch(POST_QUERY, { slug });
//   const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
//   const news =
//     !post && !service ? await client.fetch(NEWS_QUERY, { slug }) : null;

//   const content = post || service || news;
//   if (!content) {
//     return {
//       title: "Not Found",
//       description: "The page you're looking for doesn't exist.",
//     };
//   }

//   return {
//     title: content.metaTitle || content.title || "Default Title",
//     description: content.metaDescription || "Default description.",
//   };
// }

// // Page Component
// export default async function SlugPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
//   const service = !post
//     ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
//     : null;
//   const news =
//     !post && !service
//       ? await client.fetch<SanityDocument>(NEWS_QUERY, { slug })
//       : null;

//   const content = post || service || news;
//   if (!content) notFound();

//   const imageUrl = content?.mainImage?.asset?.url ?? null;
//   const youtubeUrl = content?.youtubeVideoUrl ?? null;
//   const isPost = !!post;
//   const isService = !!service;
//   const isNews = !!news;

//   const body: any[] = isService
//     ? Array.isArray(content.body1)
//       ? content.body1
//       : Array.isArray(content.body2)
//         ? content.body2
//         : []
//     : Array.isArray(content.body)
//       ? content.body
//       : [];

//   // Helper to get safe YouTube embed ID
//   const getVideoId = (url: string | null) => {
//     if (!url) return null;
//     if (url.includes("youtu.be"))
//       return url.split("/").pop()?.split("?")[0] ?? null;
//     if (url.includes("v=")) return url.split("v=")[1]?.split("&")[0] ?? null;
//     return null;
//   };
//   const videoId = getVideoId(youtubeUrl);

//   return (
//     <div className={isNews || isPost ? "blog-container" : "main-container"}>
//       <div className={isNews || isPost ? "blog-wrapper1" : "service-wrapper1"}>
//         {(isPost || isNews) && imageUrl && (
//           <Image
//             src={imageUrl}
//             alt={content.title || "Content Image"}
//             width={550}
//             height={310}
//           />
//         )}

//         {isService && imageUrl && (
//           <AboutUsHeader heading={content.title} bread={content.title} />
//         )}

//         {isNews && content.publishedAt && content.author && (
//           <b className="published-date">
//             Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
//             by {content.author}
//           </b>
//         )}

//         <div
//           className={isNews || isPost ? "blogHead-content" : "head-container"}
//         >
//           {body.map((block, index) => (
//             <PortableText
//               key={index}
//               value={Array.isArray(block) ? block : [block]}
//               components={portableTextComponents}
//             />
//           ))}
//         </div>

//         {isService && (
//           <>
//             <div className="head-container">
//               {videoId && (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   title={content.title || "YouTube Video"}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               )}
//               <HomeWhy />
//               <HomeReviews />
//               <HomeYoutube />
//             </div>

//             {Array.isArray(content.body2) && (
//               <div className="slugContent-wrapper">
//                 <div className="slugContent-container">
//                   <PortableText
//                     value={content.body2}
//                     components={portableTextComponents}
//                   />
//                   {content.customTable && (
//                     <div className="custom-table">
//                       {content.customTable.title && (
//                         <h3>{content.customTable.title}</h3>
//                       )}
//                       <table>
//                         <thead>
//                           <tr>
//                             {content.customTable.headers?.map(
//                               (header: string, idx: number) => (
//                                 <th key={idx}>{header}</th>
//                               )
//                             )}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {content.customTable.rows?.map(
//                             (row: { cells: string[] }, rowIndex: number) => (
//                               <tr key={rowIndex}>
//                                 {row.cells.map((cell, cellIndex) => (
//                                   <td key={cellIndex}>{cell}</td>
//                                 ))}
//                               </tr>
//                             )
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {(isPost || isNews) && (
//         <div className="blog-wrapper2">
//           <BlogSidebar />
//         </div>
//       )}
//     </div>
//   );
// }
