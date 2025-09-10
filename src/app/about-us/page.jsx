import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import AboutUsHeader from "./../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import AboutUsMain from "./../../components/AboutUsPage/AboutUsMain/AboutUsMain";
import HomeYoutube from './../../components/HomePage/HomeYoutube/HomeYoutube';
import HomeReviews from './../../components/HomePage/HomeReviews/HomeReviews';
export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader heading="About Us" bread="About Us" />
      <AboutUsMain />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />{" "}
    </div>
  );
}
