import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import micah from "../img/Micah-Sturm.jpg";
import jessy from "../img/Jessy-Rivard.jpeg";
import brent from "../img/Brent-Hinsz.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faLinked,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class OurTeam extends Component {
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

    window
      .axios("http://localhost:3001/user/login", {
        method: "POST",
        data: this.state
      })
      .then(response => {
        console.log(response);
        var responseData = response.data;
        localStorage.setItem("JWT", responseData.token);
        alert(responseData.message + responseData.name + ".");
        if (responseData.message === "Welcome back ") {
          window.location.href = "#/steakhouses/info";
        }
      })
      .then(info => {
        console.log(info);
      });
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
              to="/about"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Our Team
            </NavLink>
          </div>
          <h1 className="team-h1">Our Team</h1>
          <div className="team-member">
            <div>
              <h3>Brent Hinsz</h3>
              <img className="team-photo" src={brent} />
            </div>
            <span>"I like steak."</span>
            <div className="Icons">
              <a href="https://www.facebook.com/brent.hinsz.1">
                <FontAwesomeIcon className="FA_ICON" icon={faFacebookSquare} />
              </a>
              <a href="https://www.linkedin.com/in/brent-hinsz/">
                <FontAwesomeIcon className="FA_ICON" icon={faLinkedin} />
              </a>
              <a href="https://github.com/BrentLH">
                <FontAwesomeIcon className="FA_ICON" icon={faGithubSquare} />
              </a>
            </div>
          </div>
          <div className="team-member">
            <div>
              <h3>Jessy Rivard</h3>
              <img className="team-photo" src={jessy} />
              <span>"Green is my favorite color."</span>
            </div>
            <div className="Icons">
              <a href="https://www.facebook.com/jessy.rivard.3">
                <FontAwesomeIcon className="FA_ICON" icon={faFacebookSquare} />
              </a>
              <a href="https://www.linkedin.com/in/jessyrivard/">
                <FontAwesomeIcon className="FA_ICON" icon={faLinkedin} />
              </a>
              <a href="https://github.com/JessyRivard">
                <FontAwesomeIcon className="FA_ICON" icon={faGithubSquare} />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>Micah Sturm</h3>
            <img className="team-photo" src={micah} />
            <span>"Did you notice the fork in the logo can move?"</span>
            <div className="Icons">
              <a href="https://www.facebook.com/micah.sturm.7">
                <FontAwesomeIcon className="FA_ICON" icon={faFacebookSquare} />
              </a>

              <a href="https://www.linkedin.com/in/micah-sturm-739b27162/">
                <FontAwesomeIcon className="FA_ICON" icon={faLinkedin} />
              </a>

              <a href="https://github.com/m-strm">
                <FontAwesomeIcon className="FA_ICON" icon={faGithubSquare} />
              </a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default OurTeam;
