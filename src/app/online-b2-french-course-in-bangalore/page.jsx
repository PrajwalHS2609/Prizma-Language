import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchB2Essentials from "../../components/FrenchCourse/FrenchB2/FrenchB2Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/barImgs/french.png";
import FrenchB2Content from './../../components/FrenchCourse/FrenchB2/FrenchB2Content';
export const metadata = {
  title:
    "Online B2 French Course in Bangalore | Online B2 French Classes in Bangalore",
  description:
    "Online B2 French Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-b2-french-course-in-bangalore",
  keywords: [],
};
export default function FrenchB2Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="French B2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-b2-french-course-in-bangalore"
      />
      <FrenchB2Essentials />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <FrenchB2Content/>
    </div>
  );
}
