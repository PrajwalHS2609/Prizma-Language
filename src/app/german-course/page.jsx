import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CoursesHeader from "../../components/CourseHeader/CourseHeader";
import GermanCourseHead from "../../components/GermanCourse/GermanCourseHead";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function GermanCourse() {
  return (
    <div>
      <CoursesHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="Online German Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanCourseHead />
      <GermanCourseLvl />   
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
