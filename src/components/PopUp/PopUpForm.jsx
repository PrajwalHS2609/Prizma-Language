"use client";
import React from "react";
import "./PopUp.css";
import Swal from "sweetalert2";
const PopUpForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "8e8187ed-fc3e-4bd8-b553-0755da89ab07");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      })
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="contactUsForm" id="popupForm">
      <form action="" onSubmit={onSubmit}>
        <div className="firstInput">
          <input type="text" name="name" id="" placeholder="Name*" />
          <input type="text" name="email" id="" placeholder="Email*" />
        </div>
        <div className="secondInput">
          <input type="text" name="phone" id="" placeholder="Phone*" />
          <select name="course" id="">
            <option value="">Select Course</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            {/* <option value="">Japanese</option>
            <option value="">Korean</option> */}
            <option value="Italian">Italian</option>
          </select>
        </div>
        <div className="thirdInput">
          <textarea
            name="message"
            id=""
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="contactFormBtn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default PopUpForm;
