import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianCourseHead from "../../components/ItalianCourse/ItalianCourseHead";
import ItalianCourseLvl from "../../components/ItalianCourse/ItalianCourseLvl";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";
export const metadata = {
  title:
    "Online Italian Course in Bangalore | Online Italian Classes in Bangalore",
  description:
    "Online Italian Course in Bangalore from Certified Trainers, learners can cover every level from beginner (A1) to advanced (C2) and develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianCourse() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Online Italian Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />

      <ItalianCourseHead />
      <ItalianCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
    </div>
  );
}
