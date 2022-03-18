import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import LoginBox from "../components/loginBox";
import LoginPageImg from "../media/LoginPageImg.svg";
import { useNavigate } from "react-router-dom";
import "../stylesheets/LoginPage.css";
import Footer from "../components/footer";

const LoginPage = (props) => {
  
  return (
    <div className="LPMainDiv">
      <Navbar />
      <div className="LPBodyDiv">
        <img src={LoginPageImg} alt="img" width="600px" />
        <LoginBox setTestsData={props.setTestsData} />
      </div>
      <Footer/>
    </div>
  );
};

export default LoginPage;
