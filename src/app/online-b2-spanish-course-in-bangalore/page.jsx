import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import SpanishB2Content from "../../components/SpanishCourse/SpanishB2/SpanishB2Content";
import SpanishB2Essentials from "../../components/SpanishCourse/SpanishB2/SpanishB2Essentials";
import SpanishCourseLvl from "../../components/SpanishCourse/SpanishCourseLvl";
import spanishBanner from "./../../Imgs/CourseBanner/spain.png";
import spainFlag from "./../../Imgs/barImgs/spain.png";
export default function SpanishB2Course() {
  return (
    <div>
      <CourseHeader
        country="Spanish"
        img={spanishBanner}
        bar={spainFlag}
        heading="Spanish B2 Language Course"
        description="If you have a basic knowledge of Spanish , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <SpanishB2Essentials />
      <SpanishCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <SpanishB2Content/>
    </div>
  );
}
