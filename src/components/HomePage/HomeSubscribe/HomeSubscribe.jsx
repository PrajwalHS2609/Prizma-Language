import React from "react";
import "./HomeSubscribe.css";
const HomeSubscribe = () => {
  return (
    <div className="homeSub">
      <div className="homeSubContent">
        <div className="homeSubItem">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/icon/newsletter-icon.svg"
            alt=""
          />
        </div>
        <div className="homeSubItem">
          <h2>Enter Your email To Subscribe Our Newsletter</h2>
        </div>
      </div>
      <div className="homeSubContent">
        <div className="homeSubContent2-Item">
          <input type="text" name="" id="" placeholder="write your email" />
          <button>
            Subscribe{" "}
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/icon/inbox-icon.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
