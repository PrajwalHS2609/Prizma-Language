import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchCourseHead from "../../components/FrenchCourse/FrenchCourseHead";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function FrenchCourse() {
return(
      <div>
    {" "}
    <CourseHeader
      country="French"
      img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
      heading="Online French Language Course"
      description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
      link="/"
    />
    <FrenchCourseHead />
    <FrenchCourseLvl />
     <HomeFeatures />
      <HomeBenefits />
    <HomeWhy />
    <HomeTestimonial />
  </div>
)
}
