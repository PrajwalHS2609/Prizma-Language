"use client"
import React, { useState } from 'react'
import ItalianB2Curriculum from './ItalianB2Curriculum';
import ItalianB2Description from './ItalianB2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";
import ItalianCourseInstructor from '../ItalianCourseInstructor';

const ItalianB2Essentials = () => {
     const [activeTab, setActiveTab] = useState("ItalianB2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "ItalianB2Curriculum":
        return <ItalianB2Curriculum />;
      case "ItalianB2Description":
        return <ItalianB2Description />;
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
      <h2>Italian B2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "ItalianB2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("ItalianB2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "ItalianB2Description" ? "active" : ""}
                onClick={() => setActiveTab("ItalianB2Description")}
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

export default ItalianB2Essentials
