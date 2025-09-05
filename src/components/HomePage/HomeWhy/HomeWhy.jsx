"use client";
import React from "react";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FaCertificate, FaMapMarkerAlt, FaSmile } from "react-icons/fa";

import "./HomeWhy.css";
const HomeWhy = () => {
  return (
    <div className="training-container">
      {/* Left Side */}
      <div className="training-left">
        <h2>Training Delivery Modes</h2>
        <p>
          PrizmaAcademy learning offers <span>4 learning modes</span> to choose from
        </p>

        <div className="training-list">
          <div className="training-item">
            <span className="number">1</span>
            <div>
              <h3>Classroom Training</h3>
              <p>
                Learn from qualified, accredited, certified & highly experienced
                trainers in a classroom.
              </p>
            </div>
          </div>

          <div className="training-item">
            <span className="number">2</span>
            <div>
              <h3>Live Virtual Training</h3>
              <p>
                Enroll for Instructor-led Live Online Sessions and attend from
                anywhere.
              </p>
            </div>
          </div>

          <div className="training-item">
            <span className="number">3</span>
            <div>
              <h3>Corporate Group Training</h3>
              <p>
                Cost-effective and customized instructor-led onsite training for
                enterprises.
              </p>
            </div>
          </div>

          <div className="training-item">
            <span className="number">4</span>
            <div>
              <h3>Focused 1-to-1 Training</h3>
              <p>
                Achieve focused learning with a dedicated trainer and custom
                dates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      {/* Right Side */}
      <div className="training-right">
        <div className="stat-card">
          <div className="icon-circle">
            <FaCertificate className="icon" />
          </div>
          <div className="stat-counter">
            <h4>8000+</h4>
            <p>Enrolled Students</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle">
            <FaUsers className="icon" />
          </div>
          <div className="stat-counter">
            <h4>4</h4>
            <p>Foreign Languages</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle">
            <FaMapMarkerAlt className="icon" />
          </div>
          <div className="stat-counter">
            <h4>95%</h4>
            <p>A1 & A2</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-circle">
            <FaSmile className="icon" />
          </div>
          <div className="stat-counter">
            <h4>1600+</h4>
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhy;
