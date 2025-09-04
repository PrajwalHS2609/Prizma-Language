import React from "react";
import AboutUsHeader from "../AboutUsPage/AboutUsHeader/AboutUsHeader";
import ContactUsMain from "./ContactUsMain/ContactUsMain";
import ContactUsMap from "./ContactUsMap/ContactUsMap";

const ContactUsPage = () => {
  return (
    <div className="homePgContainer">
      <AboutUsHeader heading="Contact Us" bread="Contact Us" />
      <ContactUsMain/>
      <ContactUsMap/>
    </div>
  );
};

export default ContactUsPage;
