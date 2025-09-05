import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchB1Essentials from "../../components/FrenchCourse/FrenchB1/FrenchB1Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function FrenchB1Course() {
  return (
    <div>
      <CourseHeader
        country="French"
        img="https://scuola.vamtam.com/wp-content/uploads/2020/01/4French-3-453x453.jpg"
        heading="French B1 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <FrenchB1Essentials />
      <FrenchCourseLvl />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
