"use client";
import "./HomeReviews.css";
import React, { useEffect } from "react";
const HomeReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="reviewsContainer">
      <h2>
        What Our <span>Customer</span> says
      </h2>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        class="elfsight-app-c47b3300-f2fb-484e-9421-bb71c2e020f1"
        id="reviews"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default HomeReviews;
