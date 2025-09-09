import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchB1Essentials from "../../components/FrenchCourse/FrenchB1/FrenchB1Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/Language Course/French.png";
export const metadata = {
  title:
    "Online B1 French Course in Bangalore | Online B1 French Classes in Bangalore",
  description:
    "Online B1 French Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills",
  canonical: "https://prizmaacademy.com/online-b1-french-course-in-bangalore",
  keywords: [],
};
export default function FrenchB1Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="French B1 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-b1-french-course-in-bangalore"
      />
      <FrenchB1Essentials />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
