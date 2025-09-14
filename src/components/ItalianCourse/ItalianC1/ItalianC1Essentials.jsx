"use client"
import React, { useState } from 'react'
import ItalianC1Description from './ItalianC1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import ItalianC1Curriculum from './ItalianC1Curriculum';
import ItalianCourseInstructor from '../ItalianCourseInstructor';

const ItalianC1Essentials = () => {
     const [activeTab, setActiveTab] = useState("ItalianC1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianC1Curriculum":
        return <ItalianC1Curriculum />;
      case "ItalianC1Description":
        return <ItalianC1Description />;
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
      <h2>Italian C1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianC1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianC1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianC1Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianC1Description")}
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

export default ItalianC1Essentials
