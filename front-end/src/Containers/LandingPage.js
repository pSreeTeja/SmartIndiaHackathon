import React, { Component } from "react";
import Navbar from "../components/navbar";
import LandingBody from "../components/landingBody";
import Footer from "../components/footer";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <LandingBody />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
