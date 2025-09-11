import React from "react";
import "./../Styles.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const BlogPage = () => {
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
    <div className="blogPage-container">
      {/* <div className="blogPage-content">
        <div className="blogPage-heading">
          <h6>Our Blog</h6>
          <h2>
            Read Our Latest <span>Blog</span>
          </h2>
        </div>
        <div className="blogPage-heading">
          <Link href="/">
            {" "}
            <button>
              View All Blog <FaArrowRight className="blogPage-HeadingIcon" />
            </button>
          </Link>
        </div>
      </div> */}
      <div className="blogPage-content">
        {card.map((x) => (
          <div className="blogPage-Card" key={x.id}>
            <div className="blogPage-ImgContainer">
              <img src={x.img} alt={x.alt} />
            </div>
            {/* <div className="blogPage-wrapper">
            <div className="blogPage-item"></div>
          </div> */}

            <div className="blogPage-wrapper">
              <h3>{x.title}</h3>
            </div>
            <div className="blogPage-wrapper">
              <Link href={x.link}>
                {" "}
                <button>
                  READ MORE <FaArrowRight className="blogPage-ReadIcon" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
