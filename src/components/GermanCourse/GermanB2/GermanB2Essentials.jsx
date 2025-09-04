"use client"
import React, { useState } from "react";
import GermanA1Reviews from './../GermanA1/GermanA1Reviews';
import GermanA1Instructor from './../GermanA1/GermanA1Instructor';
import GermanB2Curriculum from './GermanB2Curriculum';
import GermanB2Description from "./GermanB2Description";

const GermanB2Essentials = () => {
  const [activeTab, setActiveTab] = useState("GermanB2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanB2Curriculum":
        return <GermanB2Curriculum />;
      case "GermanB2Description":
        return <GermanB2Description />;
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
      <h2>German B2 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanB2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanB2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanB2Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanB2Description")}
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

export default GermanB2Essentials;
