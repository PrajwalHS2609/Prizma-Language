"use client"

import React, { useState } from 'react'
import FrenchA2Curriculum from './FrenchA2Curriculum';
import FrenchA2Description from './FrenchA2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import FrenchCourseInstructor from '../FrenchCourseInstructor';

const FrenchA2Essentials = () => {
      const [activeTab, setActiveTab] = useState("FrenchA2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchA2Curriculum":
        return <FrenchA2Curriculum />;
      case "FrenchA2Description":
        return <FrenchA2Description />;
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
      <h2>French A2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchA2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchA2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchA2Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchA2Description")}
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

export default FrenchA2Essentials
