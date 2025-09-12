import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import ItalianC2Content from "../../components/ItalianCourse/ItalianC2/ItalianC2Content";
import ItalianC2Essentials from "../../components/ItalianCourse/ItalianC2/ItalianC2Essentials";
import italyBanner from "./../../Imgs/CourseBanner/italy.png";
import italyFlag from "./../../Imgs/barImgs/italy.png";
export const metadata = {
  title:
    "Online C2 Italian Course in Bangalore | Online C2 Italian Classes in Bangalore",
  description:
    "C2 Online Italian Course in Bangalore is designed for students, professionals, and language enthusiasts who are determined to take their Italian to a higher standard, where they can interact naturally with native speakers. ",
  canonical: "https://prizmaacademy.com/online-c2-italian-course-in-bangalore",
  keywords: [],
};
export default function ItalianC2Course() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img={italyBanner}
        bar={italyFlag}
        heading="Italian C2 Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <ItalianC2Essentials />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <ItalianC2Content/>
    </div>
  );
}
