import React from "react";
import "./ContactUsMain.css";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress">
      <div className="contactUsAddressHead">
        <h6>Contact Us</h6>
        <h3>
          Get In <span>Touch</span>
        </h3>
      </div>
      <div className="contactUsAddressContent">
        <div className="contactUsAddressLocation">
          <div className="contactAddressItem1">
            <IoLocationSharp className="contactIco"/>
          </div>
          <div className="contactAddressItem2">
            <h5>Office:</h5>
            <p>
              <a href="https://www.google.com/maps/place/Prizma+Academy/@13.0216592,77.6382462,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae171dd011b4e5:0xabab1818c3e26cae!8m2!3d13.0216592!4d77.6408211!16s%2Fg%2F11f8p4861f?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">Kalyan Nagar, Bangalore</a>
            </p>
          </div>
        </div>
        <div className="contactUsAddressPhone">
          <div className="contactAddressItem1">
            <FaPhone  className="contactIco"/>
          </div>
          <div className="contactAddressItem2">
            {" "}
            <div className="contactAddressItem2">
              <h5>Phone:</h5>
              <p>
                <a href="tel:9538608484">(+91) 9538 608 484</a>
              </p>
            </div>
          </div>
        </div>
        <div className="contactUsAddressEmail">
          <div className="contactAddressItem1">
            <FaEnvelopeOpenText className="contactIco"/>
          </div>
          <div className="contactAddressItem2">
            {" "}
            <div className="contactAddressItem2">
              <h5>Email:</h5>
              <p>
                <a href="mailto:info@prizmaacademy.com">
                  info@prizmaacademy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
