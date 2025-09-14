import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseMain from "../../components/CoursePage/CourseMain/CourseMain";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";

export const metadata = {
  title:"Learn Online German, French, Spanish & Italian Courses from Certified Trainers",
  description:
    "Master German, French, Spanish & Italian with expert-certified trainers through interactive online courses designed for all levels.",
  canonical: "https://prizmaacademy.com/courses",
  keywords: [],
};
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
