"use client";
import React, { useState } from "react";

import "./../GermanCourse.css";
import GermanA2Description from "./GermanA2Description";
import GermanA2Curriculum from "./GermanA2Curriculum";
import GermanA1Instructor from "../GermanA1/GermanA1Instructor";
import GermanA1Reviews from "../GermanA1/GermanA1Reviews";
import GermanA1Description from "../GermanA1/GermanA1Description";

const GermanA2Essential = () => {
  const [activeTab, setActiveTab] = useState("GermanA2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanA2Curriculum":
        return <GermanA2Curriculum />;
      case "GermanA1Description":
        return <GermanA1Description />;
      case "GermanA1Instructor":
        return <GermanA1Instructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };

  return (
    <div className="germanEssentials-container" id="details">
      <h2>German A2 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanA2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanA2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanA2Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanA2Description")}
              >
                Description
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanA1Instructor" ? "active" : ""}
                onClick={() => setActiveTab("GermanA1Instructor")}
              >
                Instructor
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanA1Reviews" ? "active" : ""}
                onClick={() => setActiveTab("GermanA1Reviews")}
              >
                Reviews
              </button>
            </li>
          </ul>
        </nav>

        {/* Display Content */}
        <div className="germanEssentials-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default GermanA2Essential;
