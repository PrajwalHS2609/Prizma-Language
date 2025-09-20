"use clients";
import React, { useRef, useState } from "react";
import "./NavBar.css";
import menuBar from "./../../Imgs/menuBar.png";
import exit from "./../../Imgs/exit.png";
import plus from "./../../Imgs/plus.png";
import { FaArrowRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  let [drop, setDrop] = useState(false);
    const pathname = usePathname();

  let dropRef = useRef();
  let showSideBar = () => {
    const exit = document.querySelector(".exit");
    const menuBar = document.querySelector(".menu");
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.height = "fit-content";
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    menuBar.style.display = "none";
    exit.style.display = "block";
  };
  let hideSideBar = () => {
    const exit = document.querySelector(".exit");
    const menuBar = document.querySelector(".menu");
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.height = "0%";
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    menuBar.style.display = "block";
    exit.style.display = "none";
  };
  let handleDrop = () => {
    const plus = document.querySelector(".plus");

    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      plus.style.transform = "rotate(45deg)";

      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      plus.style.transform = "rotate(0)";

      console.log("up");
    }
  };
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="menuWrapper">
      <div className="menuContainer">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            onClick={hideSideBar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/courses"
            className={pathname === "/courses" ? "active" : ""}
            onClick={hideSideBar}
          >
            Courses
          </Link>
          <div className="menuDropDown">
            <ul>
              <li>
                <Link href="/online-german-course-in-bangalore">German</Link>
              </li>
              <li>
                <Link href="/online-french-course-in-bangalore">French</Link>
              </li>
              <li>
                <Link href="/online-spanish-course-in-bangalore">Spanish</Link>
              </li>
              <li>
                <Link href="/online-italian-course-in-bangalore">Italian</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
            onClick={hideSideBar}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={pathname === "/blog" ? "active" : ""}
            onClick={hideSideBar}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
            onClick={hideSideBar}
          >
            Contact Us
          </Link>
        </li>
      </div>
      {/* -----------------------respMenu------------------------------- */}
      <div className="respMenuBar">
        <Image
          src={menuBar}
          alt="menuBar"
          onClick={showSideBar}
          className="menu"
        />
        <Image
          src={exit}
          alt="menuBar"
          onClick={hideSideBar}
          className="exit"
        />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          <li>
            {" "}
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={hideSideBar}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="respMenuList">
              {" "}
              <Link
                href="/courses"
                className={pathname === "/courses" ? "active" : ""}
                onClick={hideSideBar}
              >
                Courses
              </Link>
              <span>
                <Image
                  src={plus}
                  alt=""
                  className="plus"
                  onClick={handleDrop}
                />
              </span>
            </div>
            {/* ---------------------------respDropDown-------------------------------------------- */}
            <div className="respDrop" ref={dropRef}>
              <li>
                {" "}
                <Link
                  href="/online-german-course-in-bangalore"
                  className={
                    pathname === "/online-german-course-in-bangalore"
                      ? "active"
                      : ""
                  }
                  onClick={hideSideBar}
                >
                  German
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/online-spanish-course-in-bangalore"
                  className={pathname === "/online-spanish-course-in-bangalore" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  Spanish
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/online-french-course-in-bangalore"
                  className={pathname === "/online-french-course-in-bangalore" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  French
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/online-italian-course-in-bangalore"
                  className={pathname === "/online-italian-course-in-bangalore" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  Italian
                </Link>
              </li>
              {/* <li>
                {" "}
                <Link
                  href="/japanese"
                 className={pathname === "/" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  Japanese
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/courses"
                 className={pathname === "/" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  Korean
                </Link>
              </li> */}
              {/* <li>
                {" "}
                <Link
                  href="/courses"
                 className={pathname === "/" ? "active" : ""}
                  onClick={hideSideBar}
                >
                  Mandarin
                </Link>
              </li> */}
            </div>
          </li>
          <li>
            {" "}
            <Link
              href="/about-us"
              className={pathname === "/about-us" ? "active" : ""}
              onClick={hideSideBar}
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/blog"
              className={pathname === "/blog" ? "active" : ""}
              onClick={hideSideBar}
            >
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/contact-us"
              className={pathname === "/contact-us" ? "active" : ""}
              onClick={hideSideBar}
            >
              Contact Us
            </Link>
          </li>

          <li className="menuContainerBtn-Container">
            <div className="menuContainerBtn">
              {" "}
              <a href="https://pages.razorpay.com/prizma-academy">
                <button>
                  Pay Now <FaArrowRight className="menuIcon" />
                </button>
              </a>
              <Link href={"/"}>
                <button onClick={handlePopUp}>
                  Book A Demo <FaArrowRight className="menuIcon" />
                </button>
              </Link>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Menu;
