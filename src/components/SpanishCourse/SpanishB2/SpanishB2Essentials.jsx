"use client"
import React, { useState } from 'react'
import SpanishB2Curriculum from './SpanishB2Curriculum';
import SpanishB2Description from './SpanishB2Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import SpanishCourseInstructor from '../SpanishCourseInstructor';

const SpanishB2Essentials = () => {
     const [activeTab, setActiveTab] = useState("SpanishB2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishB2Curriculum":
        return <SpanishB2Curriculum />;
      case "SpanishB2Description":
        return <SpanishB2Description />;
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
      <h2>Spanish B2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishB2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishB2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishB2Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishB2Description")}
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

export default SpanishB2Essentials
