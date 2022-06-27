import React from "react";
import { ICFacebook, ICTwitter, LogoDewaning } from "../../../assets";
import "./footer.css";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoDewaning} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
