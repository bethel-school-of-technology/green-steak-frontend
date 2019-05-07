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
      <Router path="/users/example">
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
              to="/users/example"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              About
            </NavLink>
            <NavLink
              exact
              to="/users/review"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Review
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/users/example"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Find Steak
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/users/review"
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
