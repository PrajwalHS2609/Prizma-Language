import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanA2Essential from "../../components/GermanCourse/GermanA2/GermanA2Essential";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import GermanA2Content from "../../components/GermanCourse/GermanA2/GermanA2Content";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png";
import germanFlag from "./../../Imgs/barImgs/german.png";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
export const metadata = {
  title: " ",
  description: "",
  canonical: "",
  keywords: [],
};
export default function GermanA2Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img={germanyBanner}
        bar={germanFlag}
        heading="German A2 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-a2-german-course-in-bangalore"
      />
      <GermanA2Essential />
      <GermanCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <GermanA2Content />
    </div>
  );
}
