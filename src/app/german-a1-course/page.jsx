import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanCourseEssential from "../../components/GermanCourse/GermanCourseEssential";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function GermanA1Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German A1 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanCourseEssential />
      <GermanCourseLvl />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
