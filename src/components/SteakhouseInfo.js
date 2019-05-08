import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";

class SteakhouseInfo extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.setItem("JWT", null);
    window.location.href = "#/users/sign-in";
  };

  render() {
    return (
      <Router path="/steakhouses/info">
        <div className="App__Form">
          <div className="LogoutHolder">
            <button
              className="Logout"
              variant="contained"
              color="primary"
              onClick={this.logout}
            >
              logout
            </button>
            <br />
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
