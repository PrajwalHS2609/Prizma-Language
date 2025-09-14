"use client"
import React, { useState } from 'react'
import FrenchC2Curriculum from './FrenchC2Curriculum';
import FrenchC2Description from './FrenchC2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import FrenchCourseInstructor from '../FrenchCourseInstructor';

const FrenchC2Essentials = () => {
     const [activeTab, setActiveTab] = useState("FrenchC2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchC2Curriculum":
        return <FrenchC2Curriculum />;
      case "FrenchC2Description":
        return <FrenchC2Description />;
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
      <h2>French C2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchC2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchC2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchC2Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchC2Description")}
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

export default FrenchC2Essentials
