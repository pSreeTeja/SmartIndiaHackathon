import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";

class Navbar extends Component {
  state = {
    loginActive: false,
    signupActive: true,
  };
  render() {
    return (
      <div className="NMainDiv">
        <div className="NLogoDiv">
          <span className="NLogo">
            <span className="NX">X</span>plore
          </span>
        </div>
        <div className="NButtonsDiv">
          <div
            className={
              this.state.signupActive
                ? "NSignupButton NButton Active"
                : "NSignupButton NButton"
            }
          >
            <Link to="/signup"> Sign Up</Link>
          </div>
          <div
            className={
              this.state.loginActive
                ? "NLoginButton NButton Active"
                : "NLoginButton NButton"
            }
          >
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
