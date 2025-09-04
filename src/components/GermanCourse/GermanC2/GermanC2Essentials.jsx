"use client"
import React, { useState } from "react";
import GermanC2Curriculum from "./GermanC2Curriculum";
import GermanC2Description from "./GermanC2Description";
import GermanA1Instructor from "../GermanA1/GermanA1Instructor";
import GermanA1Reviews from "../GermanA1/GermanA1Reviews";

const GermanC2Essentials = () => {
  const [activeTab, setActiveTab] = useState("GermanC2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanC2Curriculum":
        return <GermanC2Curriculum />;
      case "GermanC2Description":
        return <GermanC2Description />;
      case "GermanA1Instructor":
        return <GermanA1Instructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return  <div className="germanEssentials-container" id="details">
      <h2>German C2 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanC2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanC2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanC2Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanC2Description")}
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
    </div>;
};

export default GermanC2Essentials;
