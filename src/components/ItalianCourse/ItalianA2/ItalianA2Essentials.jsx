"use client"
import React, { useState } from 'react'
import ItalianA2Curriculum from './ItalianA2Curriculum';
import ItalianA2Description from './ItalianA2Description';
import GermanA1Instructor from '../../GermanCourse/GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";

const ItalianA2Essentials = () => {
     const [activeTab, setActiveTab] = useState("ItalianA2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianA2Curriculum":
        return <ItalianA2Curriculum />;
      case "ItalianA2Description":
        return <ItalianA2Description />;
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
      <h2>Italian A2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianA2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianA2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianA2Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianA2Description")}
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
  )
}

export default ItalianA2Essentials
