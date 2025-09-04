"use client"
import React, { useState } from "react";
import GermanC1Curriculum from "./GermanC1Curriculum";
import GermanC1Description from "./GermanC1Description";
import GermanA1Instructor from "../GermanA1/GermanA1Instructor";
import GermanA1Reviews from "../GermanA1/GermanA1Reviews";

const GermanC1Essentials = () => {
  const [activeTab, setActiveTab] = useState("GermanC1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanC1Curriculum":
        return <GermanC1Curriculum />;
      case "GermanC1Description":
        return <GermanC1Description />;
      case "GermanA1Instructor":
        return <GermanA1Instructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return  <div className="germanEssentials-container" id="details">
      <h2>German C1 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanC1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanC1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanC1Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanC1Description")}
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

export default GermanC1Essentials;
