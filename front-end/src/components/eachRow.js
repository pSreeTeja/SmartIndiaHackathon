import React, { Component } from "react";
import "../stylesheets/eachRow.css";
class EachRow extends Component {
  state = {};
  render() {
    return (
      <div className="eachRowMainDiv">
        <div className="leftDiv">
          <span className="name">
            {this.props.activeSectionName + " " + this.props.info.name}
          </span>
          <span className="companyName">{this.props.info.companyName}</span>
        </div>
        <div className="rightDiv">
          <button className="visitButton">Details </button>
        </div>
      </div>
    );
  }
}

export default EachRow;
