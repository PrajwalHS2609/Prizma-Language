import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchA2Essentials from "../../components/FrenchCourse/FrenchA2/FrenchA2Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/Language Course/French.png";
export const metadata = {
  title:
    "Online A2 French Course in Bangalore | Online A2 French Classes in Bangalore",
  description:
    "Online A2 French Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-a2-french-course-in-bangalore",
  keywords: [],
};
export default function FrenchA2Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="French A2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-a2-french-course-in-bangalore"
      />
      <FrenchA2Essentials />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
