import React, { useEffect } from "react";
import SignupBox from "../components/signupBox";
import SignupPageImg from "../media/SignupPageImg.svg";
import { useNavigate } from "react-router-dom";
import "../stylesheets/SignupPage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SignupPage = () => {
  
  return (
    <div className="SPMainDiv">
        <Navbar />
      <div className="SPBodyDiv">
        <img src={SignupPageImg} alt="img" width="500px"/>
        <SignupBox />
      </div>
      <Footer/>
    </div>
  );
};

export default SignupPage;
