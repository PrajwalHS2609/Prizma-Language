import React from "react";
import "./Blog.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/client";
export const revalidate = 0;

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;
export default async function Blog() {
      const posts = await client.fetch(POSTS_QUERY);

  // const card = [
  //   {
  //     id: 1,
  //     title: "5 Essential Skills Every Digital Marketer Should Master",
  //     link: "/",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Graphic Design Trends Shaping Visual Communication",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Navigating the Data Science Job Market",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog3.jpg",
  //   },
  // ];
  return (
    <div className="homeBlog-container">
      <div className="blog-content">
        <div className="blog-heading">
          <h6>Our Blog</h6>
          <h2>
            Read Our Latest <span>Blog</span>
          </h2>
        </div>
        <div className="blog-heading">
          <Link href="/blog">
            {" "}
            <button>
              View All Blog <FaArrowRight className="blog-HeadingIcon" />
            </button>
          </Link>
        </div>
      </div>
      <div className="blog-content">
        {posts.map((post) => (
          <div className="blog-Card" key={post._id}>
            <div className="blog-ImgContainer">
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                  className="rounded-md object-cover aspect-video"
                />
              )}{" "}
            </div>
            {/* <div className="blog-wrapper">
            <div className="blog-item"></div>
          </div> */}

            <div className="blog-wrapper">
              <h3>{post.title}</h3>
            </div>
            <div className="blog-wrapper">
              <Link href={`/${post.slug.current}`}>
                {" "}
                <button>
                  READ MORE <FaArrowRight className="blog-ReadIcon" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

