"use client"

import React, { useState } from 'react'
import FrenchA1Curriculum from './FrenchA1Curriculum';
import FrenchA1Description from './FrenchA1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import FrenchCourseInstructor from '../FrenchCourseInstructor';

const FrenchA1Essentials = () => {
      const [activeTab, setActiveTab] = useState("FrenchA1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchA1Curriculum":
        return <FrenchA1Curriculum />;
      case "FrenchA1Description":
        return <FrenchA1Description />;
      case "FrenchCourseInstructor":
        return <FrenchCourseInstructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return (
 <div className="courseEssentials-container" id="details">
      <h2>French A1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchA1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchA1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchA1Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchA1Description")}
              >
                Description
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchCourseInstructor" ? "active" : ""}
                onClick={() => setActiveTab("FrenchCourseInstructor")}
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

export default FrenchA1Essentials
