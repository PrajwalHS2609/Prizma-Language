import React from "react";
import "./CourseCategory.css";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CourseCategoryHead = () => {
  return (
    <div className="courseCategoryHead-container">
      <div className="courseCategoryHead-content">
        <h6>Course Category</h6>{" "}
        <h2>
          Explore Top <span>Categories</span>
        </h2>
      </div>
      <Link href={"/courses"}>
        {" "}
        <button>
          View All Categories{" "}
          <FaArrowRight className="menuBtnIcon"/>
        </button>
      </Link>
    </div>
  );
};

export default CourseCategoryHead;
