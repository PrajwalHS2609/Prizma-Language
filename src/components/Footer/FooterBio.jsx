import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faFacebook,
//   faXTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import logo from "./../../Imgs/logo.png";
import Image from "next/image";
// import razorPay from "./../../Imgs/razorpay.png";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <Image src={logo} alt="" />
      <p>
        Prizma Academy is a well-renowned foreign language institute that
        provides online foreign language courses such as German, French,
        Japanese, Spanish, and many more. Whether you are learning languages
        online to study or work abroad or simply want to explore different
        cultures, you will find courses to assist you on your way.
      </p>
      {/* <a href="mailto:info@prizmaacademy.com">info@prizmaacademy.com</a> */}
      {/* <div className="footerBioSocial">
        <a href="https://www.facebook.com/PrizmaAcademyfb">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="socialIco"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/company/prizmaacademy/">
          {" "}
          <FontAwesomeIcon
            icon={faFacebook}
            className="socialIco"
          ></FontAwesomeIcon>{" "}
        </a>
        <a href="https://www.instagram.com/prizmalanguageacademy/">
          {" "}
          <FontAwesomeIcon
            icon={faXTwitter}
            className="socialIco"
          ></FontAwesomeIcon>{" "}
        </a>
        <a href="https://www.youtube.com/channel/UC_MS3y-5o36akwsI6hNbA9Q">
          {" "}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="socialIco"
          ></FontAwesomeIcon>
        </a>
      </div> */}
      {/* <div className="footerPay">
        <a href="https://pages.razorpay.com/prizma-academy">
          <img src={razorPay} alt="razorPay" />
        </a>
      </div> */}
    </div>
  );
};

export default FooterBio;
