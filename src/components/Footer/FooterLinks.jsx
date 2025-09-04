"use client"
import React from "react";
import { usePathname } from "next/navigation";

import "./Footer.css";
import Link from "next/link";
const FooterLinks = () => {
  const pathname = usePathname();

  return (
    <div className="footerLink">
      <h3>Links</h3>

      <li>
        {" "}
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link href="/courses" className={pathname === "/courses" ? "active" : ""}>
          Courses
        </Link>
      </li>
      <li>
        {" "}
        <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>
          About
        </Link>
      </li>
      <li>
        {" "}
        <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
          Blog
        </Link>
      </li>
      <li>
        {" "}
        <Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""}>
          Contact Us
        </Link>
      </li>
    </div>
  );
};

export default FooterLinks;
