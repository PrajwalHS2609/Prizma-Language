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
import dynamic from "next/dynamic";

const  Blog = dynamic(() => import("../components/HomePage/Blog/Blog"), {
  ssr: true, // ✅ ensures it's server-rendered
});
export const metadata = {
  title:"Online Foreign Language Course - German, French, Spanish & Italian",
  description:
    "Master German, French, Spanish & Italian with Prizma Academy’s online courses. Learn from certified trainers with flexible, interactive classes.",
  canonical: "https://prizmaacademy.com/",
  keywords: [],
};
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
