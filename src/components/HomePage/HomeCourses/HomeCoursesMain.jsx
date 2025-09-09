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
        courseName="German Course"
        img={german}
        students="5000"
        courseDescription="Begin your German language journey with our course and develop a solid foundation in reading, writing, and speaking under expert guidance."
      />
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="French Course"
        img={french}
        students="1300"
        courseDescription="Lay the foundation for your French language skills with our course, focusing on reading, writing, and speaking under expert guidance."
      />
      <HomeCoursesCard
        courseType="A1 Level"
        courseName="Spanish Course"
        img={spanish}
        students="700"
        courseDescription="Start your Spanish adventure with our course and build a strong foundation in reading, writing, and speaking."
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
        courseName="Italian Course"
        img={italian}
        students="340"
        courseDescription="Kickstart your Italian language skills with our course, focusing on mastering reading, writing, and speaking under expert guidance."
      />
    </div>
  );
};

export default HomeCoursesMain;
