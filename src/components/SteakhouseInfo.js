import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";

class SteakhouseInfo extends Component {

  logout = (e) => {
    e.preventDefault();
    localStorage.setItem('JWT', null);
    window.location.href = '#/users/sign-in'
  };

  render() {
    return (
      <Router path="/steakhouses/info">
        <div className="App__Form">
          <button
            variant="contained"
            color="primary"
            onClick={this.logout}
          >
            logout
          </button>
          <div className="PageSwitcher">
            <NavLink
              to="/steakhouses/info"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              About
            </NavLink>
            <NavLink
              exact
              to="/steakhouses/review"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Review
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/steakhouses/info"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Find Steak
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/steakhouses/review"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Write A Review
            </NavLink>
          </div>
        </div>
      </Router>
    );
  }
}

export default SteakhouseInfo;
