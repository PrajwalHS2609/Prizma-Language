"use client";
import "./HomeReviews.css";
import React from "react";
const HomeReviews = () => {
  return (
    <div className="reviewsContainer">
      <h2>
        What Our <span>Customer</span> says
      </h2>
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25601963"
        frameborder="0"
        width="100%"
        height="1000"
      ></iframe>
    </div>
  );
};

export default HomeReviews;
