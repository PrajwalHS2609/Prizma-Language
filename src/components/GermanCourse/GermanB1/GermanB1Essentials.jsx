"use client"
import React, { useState } from "react";
import "./../GermanCourse.css";import GermanB1Curriculum from './GermanB1Curriculum';
import GermanB1Description from './GermanB1Description';
import GermanA1Instructor from '../GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../GermanA1/GermanA1Reviews';

const GermanB1Essentials = () => {
    const [activeTab, setActiveTab] = useState("GermanB1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "GermanB1Curriculum":
        return <GermanB1Curriculum />;
      case "GermanB1Description":
        return <GermanB1Description />;
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
      <h2>German B1 Course Essentials</h2>
      <div className="germanEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="germanEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "GermanB1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("GermanB1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanB1Description" ? "active" : ""}
                onClick={() => setActiveTab("GermanB1Description")}
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
  )
}

export default GermanB1Essentials
