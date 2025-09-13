import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianA2Content from "../../components/ItalianCourse/ItalianA2/ItalianA2Content";
import ItalianA2Essentials from "../../components/ItalianCourse/ItalianA2/ItalianA2Essentials";
import ItalianCourseLvl from "../../components/ItalianCourse/ItalianCourseLvl";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";

export const metadata = {
  title:
    "Online A2 Italian Course in Bangalore | Online A2 Italian Classes in Bangalore",
  description:
    "A2 Online Italian Course in Bangalore provides learners with the right balance of structure, flexibility, and practical exposure to advance their proficiency.",
  canonical: "https://prizmaacademy.com/online-a2-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianA2Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian A2 Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <ItalianA2Essentials />
      <ItalianCourseLvl/>
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />   
      <ItalianA2Content/>
       </div>
  );
}
