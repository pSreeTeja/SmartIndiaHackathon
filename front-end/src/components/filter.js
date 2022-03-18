import React, { Component } from "react";
import "../stylesheets/filter.css";
class filters extends Component {
  state = {};
  render() {
    return (
      <div className="filterBox">
        <div className="filterTitle">Filters</div>
        <div className="filterBody">
          <div className="categoryDiv">
            <label className="categoryLabel">Category</label>

            <input
              className="categoryInput "
              type="text"
              placeholder="e.g. Web development"
            />
          </div>
          <div className="locationDiv">
            <label className="locationLabel">Location</label>

            <input
              className="locationInput "
              type="text"
              placeholder="e.g. Hyderabad"
            />
          </div>
          <div className="startfromDiv">
            <label className="startfromLabel">Starting from(or after)</label>
            <br />
            <input className="startfromInput " type="date" placeholder="Date" />
          </div>
          <div className="maxdurationDiv">
            <label className="maxdurationLabel">Max. duration (months)</label>

            <input className="maxdurationInput " type="number" />
          </div>
          <button className="applyButton">Apply</button>
        </div>
      </div>
    );
  }
}

export default filters;
