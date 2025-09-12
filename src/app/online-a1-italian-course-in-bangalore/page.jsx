import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";
import ItalianA1Content from './../../components/ItalianCourse/ItalianA1/ItalianA1Content';
export const metadata = {
  title:
    "Online A1 Italian Course in Bangalore | Online A1 Italian Classes in Bangalore",
  description:
    "A1 Online Italian Course in Bangalore has emerged as a practical and accessible way for learners to begin their journey into the world of Italian.",
  canonical: "https://prizmaacademy.com/online-a1-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianA1Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian A1 Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />{" "}
      <ItalianA1Content/>
    </div>
  );
}
