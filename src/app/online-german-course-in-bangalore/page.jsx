import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanContent from "../../components/GermanCourse/GermanContent";
import GermanCourseHead from "../../components/GermanCourse/GermanCourseHead";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png"
import germanFlag from "./../../Imgs/Language Course/German.png"
export const metadata = {
  title:
    "Online German Course in Bangalore | Online German Classes in Bangalore ",
  description:
    "Online German Course in Bangalore from Certified Trainers, learners can cover every level from beginner (A1) to advanced (C2) and develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-german-course-in-bangalore",
  keywords: [],
};
export default function GermanCourse() {
  return (
    <div>
      <CourseHeader
        country="German"
        img={germanyBanner}
        bar={germanFlag}
        heading="Online German Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanCourseHead />
      <GermanCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanContent />
    </div>
  );
}
