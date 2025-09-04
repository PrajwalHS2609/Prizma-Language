"use client";
import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 110) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // ✅ Only attach listener on client
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handlePopUp = (e) => {
    e.preventDefault();
    const popup = document.querySelector(".popup");
    if (popup) {
      popup.style.display = "flex";
    }
  };

  return (
    <div className={scroll ? "navbarContainer" : "navbarContainer1"}>
      <Logo />
      <Menu />
      <div className="navbarContainerBtn">
        <Link href="/">
          <button onClick={handlePopUp}>
            Book A Demo <FaArrowRight className="menuIcon" />
          </button>
        </Link>
        <a href="https://pages.razorpay.com/prizma-academy">
          <button>
            Pay Now <FaArrowRight className="menuIcon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
