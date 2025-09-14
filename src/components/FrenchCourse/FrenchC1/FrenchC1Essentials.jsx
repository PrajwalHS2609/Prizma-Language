"use client"
import React, { useState } from 'react'
import FrenchC1Curriculum from './FrenchC1Curriculum';
import FrenchC1Description from './FrenchC1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import FrenchCourseInstructor from '../FrenchCourseInstructor';

const FrenchC1Essentials = () => {
     const [activeTab, setActiveTab] = useState("FrenchC1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchC1Curriculum":
        return <FrenchC1Curriculum />;
      case "FrenchC1Description":
        return <FrenchC1Description />;
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
      <h2>French C1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchC1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchC1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchC1Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchC1Description")}
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

export default FrenchC1Essentials
