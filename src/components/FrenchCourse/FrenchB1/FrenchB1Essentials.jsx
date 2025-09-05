"use client"
import React, { useState } from 'react'
import "./../../Styles.css";
import FrenchB1Curriculum from './FrenchB1Curriculum';
import FrenchB1Description from './FrenchB1Description';
import GermanA1Instructor from '../../GermanCourse/GermanA1/GermanA1Instructor';
import GermanA1Reviews from '../../GermanCourse/GermanA1/GermanA1Reviews';

const FrenchB1Essentials = () => {
        const [activeTab, setActiveTab] = useState("FrenchB1Curriculum"); // Default is Curriculum

  const renderContent = () => {
    switch (activeTab) {
      case "FrenchB1Curriculum":
        return <FrenchB1Curriculum />;
      case "FrenchB1Description":
        return <FrenchB1Description />;
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
      <h2>French A1 Course Essentials</h2>
      <div className="courseEssentials-nestedContainer">
        {/* Navigation Tabs */}
        <nav className="courseEssentialsNestedNav">
          <ul>
            <li>
              <button
                className={activeTab === "FrenchB1Curriculum" ? "active" : ""}
                onClick={() => setActiveTab("FrenchB1Curriculum")}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={activeTab === "FrenchB1Description" ? "active" : ""}
                onClick={() => setActiveTab("FrenchB1Description")}
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

export default FrenchB1Essentials
