"use client"
import React, { useState } from "react";
import GermanA1Instructor from "../../GermanCourse/GermanA1/GermanA1Instructor";
import ItalianB1Curriculum from "./ItalianB1Curriculum";
import ItalianB1Description from "./ItalianB1Description";
import "./../../Styles.css";

const ItalianB1Essentials = () => {
  const [activeTab, setActiveTab] = useState("ItalianB1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianB1Curriculum":
        return <ItalianB1Curriculum />;
      case "ItalianB1Description":
        return <ItalianB1Description />;
      case "GermanA1Instructor":
        return <GermanA1Instructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return (
    <div className="courseEssentials-container" id="details">
      <h2>Italian B1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianB1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianB1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianB1Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianB1Description")}
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
        <div className="courseEssentials-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ItalianB1Essentials;
