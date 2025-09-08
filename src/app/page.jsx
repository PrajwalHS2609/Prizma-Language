import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import CourseCategory from "../components/HomePage/CourseCategory/CourseCategory";
import HomeAbout from "../components/HomePage/HomeAbout/HomeAbout";
import HomeCourses from "../components/HomePage/HomeCourses/HomeCourses";
import HomeFeatures from "../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../components/HomePage/HomeBenefits/HomeBenefits";
import HomeWhy from "../components/HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../components/HomePage/HomeTestimonial/HomeTestimonial";
import CefrShow from './../components/HomePage/CefrShow/CefrShow';
import HomeYoutube from './../components/HomePage/HomeYoutube/HomeYoutube';
export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <CefrShow/>
      <CourseCategory />
      <HomeAbout />
      <HomeCourses />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      {/* <HomeSubscribe /> */}
      <HomeTestimonial />
      <HomeYoutube/>
    </div>
  );
}
