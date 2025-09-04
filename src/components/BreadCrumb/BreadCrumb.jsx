import React from "react";
import "./BreadCrumb.css";
import  Link  from 'next/link';
const BreadCrumb = (props) => {
  return (
    <div className="breadCrumb">
      <h5>
        <Link href={"/"}>Home</Link>
      </h5>
      _ <h5>{props.txt}</h5>
    </div>
  );
};

export default BreadCrumb;
