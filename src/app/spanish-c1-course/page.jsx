import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import SpanishC1Essentials from "../../components/SpanishCourse/SpanishC1/SpanishC1Essentials";
import SpanishCourseLvl from "../../components/SpanishCourse/SpanishCourseLvl";
import spanishBanner from "./../../Imgs/CourseBanner/spain.png";
import spainFlag from "./../../Imgs/Language Course/Spanish.png";
export default function SpanishC1Course() {
  return (
    <div>
      <CourseHeader
        country="Spanish"
        img={spanishBanner}
        bar={spainFlag}
        heading="Spanish C1 Language Course"
        description="If you have a basic knowledge of Spanish , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <SpanishC1Essentials />
      <SpanishCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
