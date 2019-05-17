import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import * as auth from "../auth";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    auth
      .signUp(this.state)
      .then(response => {
        localStorage.setItem("JWT", response.token);
        this.state(response.message + response.name + ".");
        if (response.message === "Welcome ") {
          Link.href = "#/steakhouses/info";

        }
      })
      .then(info => {
        console.log(info);
      });
  }

  render() {
    return (
      <Router path="/">
        <div className="App__Form">
          <div className="PageSwitcher">
          <h2>Click here to continue{this.state}</h2>
            <NavLink
              exact
              to="/"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </NavLink>
            <NavLink
              exact
              to="/about"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Our Team
            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink
              to="/users/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>{" "}
                <Link to="/users/sign-in" className="FormField__Link">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}
export default SignUp;
