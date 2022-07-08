import React from "react";
import { RegisterBg } from "../../../assets";
import "./upload.css";

const Upload = ({img, ...rest}) => {
  return (
    <div className="upload">
      {/* jika ada image */}
      {img && <img className="preview" src={img} alt="preview" />}
      <input type="file" {...rest} />
    </div>
  );
}

export default Upload;
