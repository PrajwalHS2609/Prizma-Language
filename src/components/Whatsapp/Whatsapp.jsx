"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./Whatsapp.css";
import logo from "./../../Imgs/favIcon.png";
const Whatsapp = () => {
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="919538608484"
        accountName="Prizma Academy"
        avatar={logo.src} // Optional
        statusMessage="Typically replies within 1 min" // Optional
        chatMessage="" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default Whatsapp;
