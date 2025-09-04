"use client"
import React from "react";
import "./Footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterCourses = () => {
    const pathname = usePathname();

  return (
    <div className="footerLink">
      <h3>Courses</h3>
      <li>
        {" "}
        <Link
          href="/german"
         className={pathname === "/german" ? "active" : ""}
        >
          German
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/spanish"
         className={pathname === "/spanish" ? "active" : ""}
        >
          Spanish
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/french"
         className={pathname === "/french" ? "active" : ""}
        >
          French
        </Link>
      </li>
            <li>
        {" "}
        <Link
          href="/italian"
         className={pathname === "/italian" ? "active" : ""}
        >
          Italian
        </Link>
      </li>
      {/* <li>
        {" "}
        <Link
          href="/japanese"
         className={pathname === "/" ? "active" : ""}
        >
          Japanese
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/korean"
         className={pathname === "/" ? "active" : ""}
        >
          Korean
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/mandarin"
         className={pathname === "/" ? "active" : ""}
        >
          Mandarin
        </Link>
      </li> */}
    </div>
  );
};

export default FooterCourses;
