"use client"
import React, { useState } from 'react'
import SpanishC2Curriculum from './SpanishC2Curriculum';
import SpanishC2Description from './SpanishC2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import SpanishCourseInstructor from '../SpanishCourseInstructor';

const SpanishC2Essentials = () => {
          const [activeTab, setActiveTab] = useState("SpanishC2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishC2Curriculum":
        return <SpanishC2Curriculum />;
      case "SpanishC2Description":
        return <SpanishC2Description />;
      case "SpanishCourseInstructor":
        return <SpanishCourseInstructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return (
 <div className="courseEssentials-container" id="details">
      <h2>Spanish C2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishC2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishC2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishC2Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishC2Description")}
              >
                Description
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishCourseInstructor" ? "active" : ""}
                onClick={() => setActiveTab("SpanishCourseInstructor")}
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

export default SpanishC2Essentials
