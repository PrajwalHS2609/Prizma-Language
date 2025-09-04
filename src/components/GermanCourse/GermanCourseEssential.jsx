"use client";
import React, { useState } from "react";
import GermanA1Curriculum from "./GermanA1/GermanA1Curriculum";
import GermanA1Description from "./GermanA1/GermanA1Description";
import GermanA1Instructor from "./GermanA1/GermanA1Instructor";
import "./GermanCourse.css";
import GermanA1Reviews from "./GermanA1/GermanA1Reviews";

const GermanCourseEssential = () => {
  const [activeTab, setActiveTab] = useState("GermanA1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanA1Curriculum":
        return <GermanA1Curriculum />;
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
      <h2>German A1 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanA1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanA1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanA1Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanA1Description")}
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

export default GermanCourseEssential;
