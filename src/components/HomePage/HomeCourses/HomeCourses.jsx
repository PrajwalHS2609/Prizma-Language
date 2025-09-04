import React from "react";
import "./HomeCourses.css";
import HomeCoursesHead from "./HomeCoursesHead";
import HomeCoursesMain from "./HomeCoursesMain";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const HomeCourses = () => {
  return (
    <div className="homeCourses">
      <HomeCoursesHead />
      <HomeCoursesMain />
      <Link href="">
        <button>
          View All Courses{" "}
          <FaArrowRight className="menuIcon"/>
        </button>
      </Link>{" "}
    </div>
  );
};

export default HomeCourses;
