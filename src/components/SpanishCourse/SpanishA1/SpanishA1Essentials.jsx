"use client"
import React, { useState } from 'react'
import SpanishA1Curriculum from './SpanishA1Curriculum';
import SpanishA1Description from './SpanishA1Description';
import GermanA1Instructor from '../../GermanCourse/GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';

const SpanishA1Essentials = () => {
          const [activeTab, setActiveTab] = useState("SpanishA1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "SpanishA1Curriculum":
        return <SpanishA1Curriculum />;
      case "SpanishA1Description":
        return <SpanishA1Description />;
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
      <h2>Spanish A1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "SpanishA1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("SpanishA1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "SpanishA1Description" ? "active" : ""}
                onClick={() => setActiveTab("SpanishA1Description")}
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

export default SpanishA1Essentials
