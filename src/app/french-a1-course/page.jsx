import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchA1Essentials from "../../components/FrenchCourse/FrenchA1/FrenchA1Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function FrenchA1Course(){
    return(
         <div>
      <CourseHeader
        country="French"
        img="https://scuola.vamtam.com/wp-content/uploads/2020/01/4French-3-453x453.jpg"
        heading="French A1 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <FrenchA1Essentials />
      <FrenchCourseLvl />
      <HomeWhy />
      <HomeTestimonial />
    </div>
    )
}