import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import * as auth from "../auth";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
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

    auth.signIn(this.state)
      .then(response => {
        localStorage.setItem('JWT', response.token);
        alert(response.message + response.name + ".");
        if (response.message === "Welcome back ") {
          window.location.href = "#/steakhouses/info";
        }
      })
  }

  render() {
    return (
      <Router path="/users/sign-in">
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink
              to="/users/sign-in"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
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
            <form
              onSubmit={this.handleSubmit}
              className="FormFields"
            >
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
                <button type="submit" className="FormField__Button mr-20">Sign In</button>{" "}
                <Link to="/" className="FormField__Link">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default SignInForm;
