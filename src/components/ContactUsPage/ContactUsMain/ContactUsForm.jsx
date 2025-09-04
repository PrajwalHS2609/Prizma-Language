import React from "react";
import "./ContactUsMain.css";
const ContactUsForm = () => {
  return (
    <div className="contactUsForm">
      <form action="">
        <div className="firstInput">
          <input type="text" name="" id="" placeholder="Name*" />
          <input type="text" name="" id="" placeholder="Email*" />
        </div>
        <div className="secondInput">
          <input type="text" name="" id="" placeholder="Phone*" />
          <select name="" id="">
            <option value="">Select Course</option>
            <option value="">German</option>
            <option value="">French</option>
            <option value="">Spanish</option>
            <option value="">Japanese</option>
            <option value="">Korean</option>
            <option value="">Italian</option>
          </select>
        </div>
        <div className="thirdInput">
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="contactFormBtn">
          <button>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
