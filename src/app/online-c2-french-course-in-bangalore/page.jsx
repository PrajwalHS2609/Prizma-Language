import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchC2Content from "../../components/FrenchCourse/FrenchC2/FrenchC2Content";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import FrenchC2Essentials from "../../components/FrenchCourse/FrenchC2/FrenchC2Essentials";
import frenchBanner from "./../../Imgs/CourseBanner/france.png";
import frenchFlag from "./../../Imgs/barImgs/french.png";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
export default function FrenchC1Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img={frenchBanner}
        bar={frenchFlag}
        heading="French C2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-c2-french-course-in-bangalore"
      />
      <FrenchC2Essentials />
      <FrenchCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <FrenchC2Content />
    </div>
  );
}
