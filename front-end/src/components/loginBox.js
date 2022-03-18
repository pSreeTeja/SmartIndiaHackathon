import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/loginBox.css";
import { Link } from "react-router-dom";

const LoginBox = (props) => {
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  return (
    <div className="LoginBoxDiv">
      <div className="LBHeadDiv">Login</div>
      <div className="LBBodyDiv">
        <div className="LBErrorDiv" style={{ display: errorDisplay }}>
          <p className="LBError">{error}</p>
        </div>
        <div className="LBEmailDiv">
          <label className="LBEmailLabel">Enter your email</label>
          <input className="LBEmailInput LBInput" type="email" />
        </div>
        <div className="LBPasswordDiv">
          <label className="LBPasswordLabel">Password</label>
          <input className="LBPasswordInput LBInput" type="password" />
        </div>
        <div className="LBLoginButtonDiv">
          <button className="LBLoginButton">
            Login
          </button>
        </div>
        <div className="LBsignuptext">
          <span>
            Don't have an account ? <Link to="/signup" className="LBLink">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
