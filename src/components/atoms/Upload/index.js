import React from "react";
import { RegisterBg } from "../../../assets";
import "./upload.css";

function Upload() {
  return (
    <div className="upload">
      <img className="preview" src={RegisterBg} alt="preview" />
      <input type="file" />
    </div>
  );
}

export default Upload;
