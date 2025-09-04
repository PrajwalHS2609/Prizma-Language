import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseMain from "../../components/CoursePage/CourseMain/CourseMain";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";

export default function CoursePage() {
  return (
    <div>
      <AboutUsHeader heading="Courses" bread="Courses" />
      <CourseMain />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
