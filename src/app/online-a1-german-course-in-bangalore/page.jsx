import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanA1Content from "../../components/GermanCourse/GermanA1/GermanA1Content";
import GermanA1Head from "../../components/GermanCourse/GermanA1/GermanA1Head";
import GermanCourseEssential from "../../components/GermanCourse/GermanCourseEssential";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png"
import germanFlag from "./../../Imgs/Language Course/German.png"
export const metadata = {
  title:
    "Online A1 German Course in Bangalore | Online A1 German Classes in Bangalore ",
  description:
    "Online A1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-a1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanA1Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img={germanyBanner}
        bar={germanFlag}        heading="German A1 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-a1-german-course-in-bangalore"
      />
      <GermanCourseEssential />
      <GermanCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanA1Content />
    </div>
  );
}
