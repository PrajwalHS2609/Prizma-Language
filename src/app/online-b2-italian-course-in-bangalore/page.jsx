import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianB2Content from "../../components/ItalianCourse/ItalianB2/ItalianB2Content";
import ItalianB2Essentials from "../../components/ItalianCourse/ItalianB2/ItalianB2Essentials";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";
import ItalianCourseLvl from './../../components/ItalianCourse/ItalianCourseLvl';
export const metadata = {
  title:
    "Online B2 Italian Course in Bangalore | Online B2 Italian Classes in Bangalore",
  description:
    "B2 Online Italian Course in Bangalore is designed for students, professionals, and language enthusiasts who are determined to take their Italian to a higher standard, where they can interact naturally with native speakers. ",
  canonical: "https://prizmaacademy.com/online-b2-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianB2Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian B2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <ItalianB2Essentials />
      <ItalianCourseLvl/>
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />{" "}
      <ItalianB2Content/>
    </div>
  );
}
