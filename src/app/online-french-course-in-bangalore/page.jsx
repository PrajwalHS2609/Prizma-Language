import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchCourseContent from "../../components/FrenchCourse/FrenchCourseContent";
import FrenchCourseHead from "../../components/FrenchCourse/FrenchCourseHead";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/Language Course/French.png";

export const metadata = {
  title:
    "Online French Course in Bangalore | Online French Classes in Bangalore",
  description:
    "Online French Course in Bangalore from Certified Trainers, learners can cover every level from beginner (A1) to advanced (C2) and develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-french-course-in-bangalore",
  keywords: [],
};
export default function FrenchCourse() {
  return (
    <div>
      {" "}
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="Online French Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-french-course-in-bangalore"
      />
      <FrenchCourseHead />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <FrenchCourseContent />
    </div>
  );
}
