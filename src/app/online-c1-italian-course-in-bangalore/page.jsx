import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianC1Content from "../../components/ItalianCourse/ItalianC1/ItalianC1Content";
import ItalianC1Essentials from "../../components/ItalianCourse/ItalianC1/ItalianC1Essentials";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";

export const metadata = {
  title:
    "Online C1 Italian Course in Bangalore | Online C1 Italian Classes in Bangalore",
  description:
    "C1 Online Italian Course in Bangalore is designed for ambitious learners who want to refine their Italian for academic, professional, or cultural purposes.",
  canonical: "https://prizmaacademy.com/online-c1-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianC1Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian C1 Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <ItalianC1Essentials />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <ItalianC1Content/>
    </div>
  );
}
