"use client"
import React, { useState } from 'react'
import SpanishB1Curriculum from './SpanishB1Curriculum';
import SpanishB1Description from './SpanishB1Description';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import SpanishCourseInstructor from '../SpanishCourseInstructor';

const SpanishB1Essentials = () => {
       const [activeTab, setActiveTab] = useState("SpanishB1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishB1Curriculum":
        return <SpanishB1Curriculum />;
      case "SpanishB1Description":
        return <SpanishB1Description />;
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
      <h2>Spanish B1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishB1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishB1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishB1Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishB1Description")}
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

export default SpanishB1Essentials
