import React, { Component } from "react";
import "../stylesheets/home.css";
import ProfilePic from "../media/ProfilePic.svg";
import SearchIcon from "../media/SearchIcon.svg";
import EachRow from "../components/eachRow";
import Filter from "../components/filter";
class Home extends Component {
  state = {
    workshopsActive: true,
    seminarsActive: false,
    conferencesActive: false,
    symposiaActive: false,
    activeSectionName: "Workshops",
    items: [
      {
        name: "1",
        companyName: "Apple",
      },
      {
        name: "1",
        companyName: "Apple",
      },
      {
        name: "1",
        companyName: "Apple",
      },
    ],
  };
  handleWorkshops = () => {
    this.setState({
      workshopsActive: true,
      seminarsActive: false,
      conferencesActive: false,
      symposiaActive: false,
      activeSectionName: "Workshops",
    });
  };
  handleSeminars = () => {
    this.setState({
      workshopsActive: false,
      seminarsActive: true,
      conferencesActive: false,
      symposiaActive: false,
      activeSectionName: "Seminars",
    });
  };
  handleConferences = () => {
    this.setState({
      workshopsActive: false,
      seminarsActive: false,
      conferencesActive: true,
      symposiaActive: false,
      activeSectionName: "Conferences",
    });
  };
  handleSymposia = () => {
    this.setState({
      workshopsActive: false,
      seminarsActive: false,
      conferencesActive: false,
      symposiaActive: true,
      activeSectionName: "Symposia",
    });
  };
  render() {
    return (
      <div className="homeMainDiv">
        <div className="firstDiv">
          <img src={ProfilePic} className="profilePic" alt="profileImg" />
        </div>
        <div className="secondDiv">
          <div>
            <div className="titleDiv">
              <p className="Title">Xplore</p>
            </div>
            <div className="sectionsDiv">
              <span
                onClick={this.handleWorkshops}
                className={
                  this.state.workshopsActive
                    ? "sectionActive workshopsTitle"
                    : "workshopsTitle"
                }
              >
                Workshops
              </span>
              <span
                onClick={this.handleSeminars}
                className={
                  this.state.seminarsActive
                    ? "sectionActive seminarsTitle"
                    : "seminarsTitle"
                }
              >
                Seminars
              </span>
              <span
                onClick={this.handleConferences}
                className={
                  this.state.conferencesActive
                    ? "sectionActive conferencesTitle"
                    : "conferencesTitle"
                }
              >
                Conferences
              </span>
              <span
                onClick={this.handleSymposia}
                className={
                  this.state.symposiaActive
                    ? "sectionActive symposiaTitle"
                    : "symposiaTitle"
                }
              >
                Symposia
              </span>
            </div>
          </div>
          <div className="buttonDiv">
            <button className="createButton">CREATE</button>
          </div>
        </div>
        <div className="thirdDiv">
          <div className="topBar">
            <select name="role" className="selectTag">
              <option value={"All" + this.state.activeSectionName}>
                {"All " + this.state.activeSectionName}
              </option>
              <option value={"My" + this.state.activeSectionName}>
                {"My " + this.state.activeSectionName}
              </option>
            </select>
            <div className="searchDiv">
              <img src={SearchIcon} alt="img" className="searchIcon"></img>
              <input
                placeholder="Search for topics"
                className="searchInput"
              ></input>
            </div>
          </div>
          <div className="bottomDiv">
            <div className="listDiv">
              {this.state.items.map((item) => {
                return (
                  <EachRow
                    info={item}
                    activeSectionName={this.state.activeSectionName}
                  />
                );
              })}
            </div>
            <div className="filterDiv">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
