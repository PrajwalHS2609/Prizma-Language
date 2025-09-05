import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import FrenchC2Essentials from './../../components/FrenchCourse/FrenchC2/FrenchC2Essentials';

export default function FrenchC1Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img="https://scuola.vamtam.com/wp-content/uploads/2020/01/4French-3-453x453.jpg"
        heading="French C2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <FrenchC2Essentials />
      <FrenchCourseLvl />
       <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
