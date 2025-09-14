import React from "react";
import "./Blog.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  const card = [
    {
      id: 1,
      title: "5 Essential Skills Every Digital Marketer Should Master",
      link: "/",
      img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog1.jpg",
    },
    {
      id: 2,
      title: "Graphic Design Trends Shaping Visual Communication",
      link: "",
      img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog2.jpg",
    },
    {
      id: 3,
      title: "Navigating the Data Science Job Market",
      link: "",
      img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog3.jpg",
    },
  ];
  return (
    <div className="blog-container">
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
        {card.map((x) => (
          <div className="blog-Card" key={x.id}>
            <div className="blog-ImgContainer">
              <img src={x.img} alt={x.alt} />
            </div>
            {/* <div className="blog-wrapper">
            <div className="blog-item"></div>
          </div> */}

            <div className="blog-wrapper">
              <h3>{x.title}</h3>
            </div>
            <div className="blog-wrapper">
              <Link href={x.link}>
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

export default Blog;
