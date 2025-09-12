import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import SpanishC2Content from "../../components/SpanishCourse/SpanishC2/SpanishC2Content";
import SpanishC2Essentials from "../../components/SpanishCourse/SpanishC2/SpanishC2Essentials";
import SpanishCourseLvl from "../../components/SpanishCourse/SpanishCourseLvl";
import spanishBanner from "./../../Imgs/CourseBanner/spain.png";
import spainFlag from "./../../Imgs/barImgs/spain.png";
export const metadata = {
  title:
    " Online C2 Spanish Course in Bangalore | Online C2 Spanish Classes in Bangalore",
  description:
    "Online C2 Spanish Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-c2-spanish-course-in-bangalore",
  keywords: [],
};
export default function SpanishC2Course() {
  return (
    <div>
      <CourseHeader
        country="Spanish"
        img={spanishBanner}
        bar={spainFlag}
        heading="Spanish C2 Language Course"
        description="If you have a basic knowledge of Spanish , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <SpanishC2Essentials />
      <SpanishCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <HomeReviews />
      <HomeYoutube />
      <SpanishC2Content />
    </div>
  );
}
