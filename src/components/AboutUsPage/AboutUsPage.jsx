import React from "react";
import AboutUsHeader from "./AboutUsHeader/AboutUsHeader";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeSubscribe from "../HomePage/HomeSubscribe/HomeSubscribe";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import AboutUsMain from "./AboutUsMain/AboutUsMain";

const AboutUsPage = () => {
  return (
    <div className="homePgContainer">
      <AboutUsHeader heading="About Us" bread="About Us" />
      <AboutUsMain />
      <HomeWhy />
      <HomeSubscribe />
      <HomeTestimonial />
    </div>
  );
};

export default AboutUsPage;
