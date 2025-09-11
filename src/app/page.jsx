import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import CourseCategory from "../components/HomePage/CourseCategory/CourseCategory";
import HomeAbout from "../components/HomePage/HomeAbout/HomeAbout";
import HomeCourses from "../components/HomePage/HomeCourses/HomeCourses";
import HomeFeatures from "../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../components/HomePage/HomeBenefits/HomeBenefits";
import HomeWhy from "../components/HomePage/HomeWhy/HomeWhy";
import CefrShow from "./../components/HomePage/CefrShow/CefrShow";
import HomeYoutube from "./../components/HomePage/HomeYoutube/HomeYoutube";
import HomeReviews from "./../components/HomePage/HomeReviews/HomeReviews";
import Blog from "../components/HomePage/Blog/Blog";
export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <CefrShow />
      <CourseCategory />
      <HomeAbout />
      <HomeCourses />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      {/* <HomeSubscribe /> */}
      {/* <HomeTestimonial /> */}
      <HomeReviews />
      <Blog />
      <HomeYoutube />
    </div>
  );
}
