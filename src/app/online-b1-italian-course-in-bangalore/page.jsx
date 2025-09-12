import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianB1Essentials from "../../components/ItalianCourse/ItalianB1/ItalianB1Essentials";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";
export const metadata = {
  title:
    "Online B1 Italian Course in Bangalore | Online B1 Italian Classes in Bangalore",
  description:
    "B1 Online Italian Course in Bangalore has been carefully designed for students and working professionals who are ready to expand their fluency and engage in meaningful conversations in Italian.",
  canonical: "https://prizmaacademy.com/online-b1-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianB1Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian B1 Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <ItalianB1Essentials />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />{" "}
    </div>
  );
}
