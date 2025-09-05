import CourseHeader from "../../components/CourseHeader/CourseHeader";
import FrenchA2Essentials from "../../components/FrenchCourse/FrenchA2/FrenchA2Essentials";
import FrenchCourseLvl from "../../components/FrenchCourse/FrenchCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function FrenchA2Course(){
    return(
             <div>
      <CourseHeader
        country="French"
        img="https://scuola.vamtam.com/wp-content/uploads/2020/01/4French-3-453x453.jpg"
        heading="French A2 Language Course"
        description="If you have a basic knowledge of French , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <FrenchA2Essentials />
      <FrenchCourseLvl />
      <HomeWhy />
      <HomeTestimonial />
    </div>
    )
}