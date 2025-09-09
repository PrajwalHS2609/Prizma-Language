import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchC1Content from "../../components/FrenchCourse/FrenchC1/FrenchC1Content";
import FrenchC1Essentials from "../../components/FrenchCourse/FrenchC1/FrenchC1Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/Language Course/French.png";
export default function FrenchC1Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="French C1 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-c1-french-course-in-bangalore"
      />
      <FrenchC1Essentials />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <FrenchC1Content/>
    </div>
  );
}
