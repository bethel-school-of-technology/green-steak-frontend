import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import Rating from "./rating";
import * as api from "../api"

class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      ratePrice: "",
      rateQuality: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  logout = e => {
    e.preventDefault();
    localStorage.setItem('JWT', null);
    window.location.href = '#/users/sign-in'
  };

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
    console.log(this.props.match.params.steakhouse)

    api.submitReview(this.state, this.props.match.params.steakhouse)
      .then(response => {
        if (response.message === "review saved") {
          alert(response.message);
          window.location.href = "#/steakhouses/info/" + this.props.match.params.steakhouse
        } else {
          alert(response.message);
        }
      });
  }

  render() {
    return (
      <Router path="/steakhouses/review">
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
              to={"/steakhouses/info/" + this.props.match.params.steakhouse}
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Find Steak
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to={"/steakhouses/review/" + this.props.match.params.steakhouse}
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Write A Review
            </NavLink>
          </div>

          <div className="FormCenter">
            <div id="writeReview">Write a review</div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <textarea
                  rows={10}
                  cols={50}
                  defaultValue={""}
                  id="comment"
                  className="FormReview"
                  placeholder="How was your experience?"
                  name="comment"
                  onChange={this.handleChange}
                />
              </div>
              <p>
                <Rating
                  ratePrice={this.state.ratePrice}
                  rateQuality={this.state.rateQuality}
                  handleChange={this.handleChange}
                />
                <br />
              </p>

              <div className="FormField">
                <button className="FormField__Button mr-20">Post</button>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default ReviewForm;
