import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseMain from "../../components/CoursePage/CourseMain/CourseMain";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";

export default function CoursePage() {
  return (
    <div>
      <AboutUsHeader heading="Courses" bread="Courses" />
      <CourseMain />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />{" "}
    </div>
  );
}
