"use client"
import React, { useState } from 'react'
import SpanishC1Curriculum from './SpanishC1Curriculum';
import SpanishC1Description from './SpanishC1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import SpanishCourseInstructor from '../SpanishCourseInstructor';

const SpanishC1Essentials = () => {
          const [activeTab, setActiveTab] = useState("SpanishC1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishC1Curriculum":
        return <SpanishC1Curriculum />;
      case "SpanishC1Description":
        return <SpanishC1Description />;
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
      <h2>Spanish C1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishC1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishC1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishC1Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishC1Description")}
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

export default SpanishC1Essentials
