"use client"
import React, { useState } from 'react'
import SpanishA2Curriculum from './SpanishA2Curriculum';
import SpanishA2Description from './SpanishA2Description';
import GermanA1Instructor from '../../GermanCourse/GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';

const SpanishA2Essentials = () => {
          const [activeTab, setActiveTab] = useState("SpanishA2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishA2Curriculum":
        return <SpanishA2Curriculum />;
      case "SpanishA2Description":
        return <SpanishA2Description />;
      case "GermanA1Instructor":
        return <GermanA1Instructor />;
      case "GermanA1Reviews":
        return <GermanA1Reviews />;
      default:
        return null;
    }
  };
  return (
 <div className="courseEssentials-container" id="details">
      <h2>Spanish A2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishA2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishA2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishA2Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishA2Description")}
              >
                Description
              </button>
            </li>
            <li>
              <button
                className={activeTab === "GermanA1Instructor" ? "active" : ""}
                onClick={() => setActiveTab("GermanA1Instructor")}
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


export default SpanishA2Essentials
