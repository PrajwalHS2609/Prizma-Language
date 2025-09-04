"use client"
import React, { useEffect } from "react";
import "./GermanA1.css"
const GermanA1Reviews = () => {
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

export default GermanA1Reviews;
