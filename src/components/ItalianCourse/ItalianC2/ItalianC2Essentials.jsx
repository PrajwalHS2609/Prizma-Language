"use client"
import React, { useState } from 'react'
import ItalianC2Curriculum from './ItalianC2Curriculum';
import ItalianC2Description from './ItalianC2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import ItalianCourseInstructor from '../ItalianCourseInstructor';

const ItalianC2Essentials = () => {
     const [activeTab, setActiveTab] = useState("ItalianC2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianC2Curriculum":
        return <ItalianC2Curriculum />;
      case "ItalianC2Description":
        return <ItalianC2Description />;
      case "ItalianCourseInstructor":
        return <ItalianCourseInstructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return (
 <div className="courseEssentials-container" id="details">
      <h2>Italian C2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianC2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianC2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianC2Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianC2Description")}
              >
                Description
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianCourseInstructor" ? "active" : ""}
                onClick={() => setActiveTab("ItalianCourseInstructor")}
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

export default ItalianC2Essentials
