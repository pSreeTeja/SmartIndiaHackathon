import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../stylesheets/signupBox.css";

const SignupBox = () => {
  

  return (
    <div className="SignupBoxDiv">
      <div className="SBHeadDiv">Signup</div>
      <div className="SBBodyDiv">
        {/* <div className="SBErrorDiv" style={{ display: errorDisplay }}>
          <p className="SBError">{error}</p>
        </div> */}
        <div className="SBNameDiv">
          <label className="SBNameLabel">Enter your name</label>
          <input className="SBNameInput SBInput" type="text" />
        </div>
        <div className="SBEmailDiv">
          <label className="SBEmailLabel">Enter your email</label>
          <input className="SBEmailInput SBInput" type="email" />
        </div>
        <div className="SBPasswordDiv">
          <label className="SBPasswordLabel">Password</label>
          <input className="SBPasswordInput SBInput" type="password" />
        </div>
        <div className="SBConfirmPasswordDiv">
          <label className="SBConfirmPasswordLabel">Confirm Password</label>
          <input className="SBConfirmPasswordInput SBInput" type="password" />
        </div>
        <div className="SBProfessionDiv">
              <label className="SBProfessionLabel">Profession</label>
              <select name="languages" id="lang" className="SBProfessionSelect">
                
                  <option value="student" name="student">
                    Student
                  </option>
                
                  <option value="faculty" name="faculty">
                    Faculty
                  </option>
               
                  <option value="researcher" name="researcher">
                    Researcher
                  </option>
              </select>
        </div>
        <div className="SBSignupButtonDiv">
          <button className="SBSignupButton">
            Signup
          </button>
        </div>
        <div className="SBsignuptext">
          <span>
            Already have an account ? <Link to="/login" className="SBLink">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupBox;
