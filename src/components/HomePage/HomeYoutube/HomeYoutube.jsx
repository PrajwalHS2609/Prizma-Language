"use client"
import React from "react";
import "./HomeYoutube.css";
import ReactPlayer from "react-player";

const HomeYoutube = () => {
  const vid = [
    { id: 1, vid: "https://www.youtube.com/embed/YoiDlbhZPfA" },
    { id: 2, vid: "https://www.youtube.com/embed/EGRqNOWUfB0" },
    { id: 3, vid: "https://www.youtube.com/embed/pZSkx1k3T04" },
    { id: 4, vid: "https://www.youtube.com/embed/D_nwBFf_bpE" },
    { id: 5, vid: "https://www.youtube.com/embed/gBVGP0z9Y_s" },
    { id: 6, vid: "https://www.youtube.com/embed/DW-7z80lEMU" },
    { id: 7, vid: "https://www.youtube.com/embed/zsh82c7kbes" },
    { id: 8, vid: "https://www.youtube.com/embed/gKcRbegcsFc" },
    { id: 9, vid: "https://www.youtube.com/embed/KlDEeB4q9CQ" },
    { id: 10, vid: "https://www.youtube.com/embed/pn8xiJJ6BpU" },
  ];
  return (
    <div className="homeYt-container">
      <h2>
        Students <span>Speech </span> Videos
      </h2>
      <div className="homeYt-wrapper">
        {vid.map((x) => (
          <div className="homeYt-content" key={x.id}>
            <ReactPlayer
              src={x.vid}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              controls={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeYoutube;
