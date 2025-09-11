"use client";

import React, { useState } from "react";
import "./../../Styles.css";
const SpanishB2Content = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="courseHead">
      <div className="courseHead-content">
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      {expanded && (
        <>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="courseHead-content">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </>
      )}
      <button className="readMoreBtn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default SpanishB2Content;
