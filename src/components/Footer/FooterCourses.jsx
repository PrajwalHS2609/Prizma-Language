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
          href="/german-course"
         className={pathname === "/german-course" ? "active" : ""}
        >
          German
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/spanish-course"
         className={pathname === "/spanish-course" ? "active" : ""}
        >
          Spanish
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/french-course"
         className={pathname === "/french-course" ? "active" : ""}
        >
          French
        </Link>
      </li>
            <li>
        {" "}
        <Link
          href="/italian-course"
         className={pathname === "/italian-course" ? "active" : ""}
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
