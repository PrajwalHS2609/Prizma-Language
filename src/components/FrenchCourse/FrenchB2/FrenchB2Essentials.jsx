"use client"

import React, { useState } from 'react'
import FrenchB2Curriculum from './FrenchB2Curriculum';
import FrenchB2Description from './FrenchB2Description';
import GermanA1Instructor from '../../GermanCourse/GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';
import "./../../Styles.css";

const FrenchB2Essentials = () => {
      const [activeTab, setActiveTab] = useState("FrenchB2Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchB2Curriculum":
        return <FrenchB2Curriculum />;
      case "FrenchB2Description":
        return <FrenchB2Description />;
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
      <h2>French B2 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchB2Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchB2Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchB2Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchB2Description")}
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

export default FrenchB2Essentials
