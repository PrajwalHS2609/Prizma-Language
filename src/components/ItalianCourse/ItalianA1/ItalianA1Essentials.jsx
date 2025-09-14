"use client"
import React, { useState } from 'react'
import ItalianA1Curriculum from './ItalianA1Curriculum';
import ItalianA1Description from './ItalianA1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import ItalianCourseInstructor from '../ItalianCourseInstructor';

const ItalianA1Essentials = () => {
     const [activeTab, setActiveTab] = useState("ItalianA1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianA1Curriculum":
        return <ItalianA1Curriculum />;
      case "ItalianA1Description":
        return <ItalianA1Description />;
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
      <h2>Italian A1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianA1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianA1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianA1Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianA1Description")}
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

export default ItalianA1Essentials
