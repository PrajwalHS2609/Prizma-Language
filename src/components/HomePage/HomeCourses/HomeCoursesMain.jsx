import React from "react";
import "./HomeCourses.css";
import HomeCoursesCard from "./HomeCoursesCard";
import german from "./../../../Imgs/Language Course/German.png";
import french from "./../../../Imgs/Language Course/French.png";
import spanish from "./../../../Imgs/Language Course/Spanish.png";
import italian from "./../../../Imgs/Language Course/Italian.png";

const HomeCoursesMain = () => {
  return (
    <div className="homeCoursesMain">
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="German"
        img={german}
        students="5000"
      />
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="French"
        img={french}
        students="1300"
      />
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="Spanish"
        img={spanish}
        students="700"
      />
      {/* <HomeCoursesCard
        courseType="N5 Level"
        courseName="Japanese"
        img={japanese}
        students="340"
      />
      <HomeCoursesCard
        courseType="1a Level"
        courseName="Korean"
        img={korean}
        students="320"
      /> */}
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="Italian"
        img={italian}
        students="340"
      />
    </div>
  );
};

export default HomeCoursesMain;
