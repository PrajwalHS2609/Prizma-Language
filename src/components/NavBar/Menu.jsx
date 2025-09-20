"use client";
import React, { useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu3, TbX } from "react-icons/tb";

const Menu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="logo">
        <Link href="/">MyLogo</Link>
      </div>

      {/* Desktop menu */}
      <div className="menu-content desktop-menu">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/online-mba"
              className={pathname === "/online-mba" ? "active" : ""}
            >
              Online MBA
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className={pathname === "/programs" ? "active" : ""}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/top-universities"
              className={pathname === "/top-universities" ? "active" : ""}
            >
              Top Universities
            </Link>
          </li>
        </ul>
        <button className="button-87" onClick={handlePop}>
          Speak to Advisor
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        {isOpen ? <TbX size={30} /> : <TbMenu3 size={30} />}
      </div>

      {/* Sidebar menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/online-mba" onClick={toggleSidebar}>
              Online MBA
            </Link>
          </li>
          <li>
            <Link href="/programs" onClick={toggleSidebar}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="/top-universities" onClick={toggleSidebar}>
              Top Universities
            </Link>
          </li>
        </ul>
        <button className="button-87" onClick={() => { handlePop(); toggleSidebar(); }}>
          Speak to Advisor
        </button>
      </div>
    </nav>
  );
};

export default Menu;
