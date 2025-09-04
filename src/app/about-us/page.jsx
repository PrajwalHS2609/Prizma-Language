import HomeSubscribe from "../../components/HomePage/HomeSubscribe/HomeSubscribe";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import AboutUsHeader from "./../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import AboutUsMain from "./../../components/AboutUsPage/AboutUsMain/AboutUsMain";
export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader heading="About Us" bread="About Us" />
      <AboutUsMain />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}
