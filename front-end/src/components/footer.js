import React, { Component } from "react";
import FacebookIcon from "../media/facebook.svg";
import TwitterIcon from "../media/twitter.svg";
import "../stylesheets/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="FMainDiv">
        <div className="FTextDiv">xplore &copy; Copyright 2022</div>
        <div className="FIconsDiv">
          <img src={TwitterIcon} alt="img" />
          <img src={FacebookIcon} alt="img" />
        </div>
      </div>
    );
  }
}

export default Footer;
