import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanC2Essentials from "../../components/GermanCourse/GermanC2/GermanC2Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function GermanC2Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German C2 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanC2Essentials />
      <GermanCourseLvl />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
