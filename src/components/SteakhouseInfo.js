import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import * as api from "../api";

class SteakhouseInfo extends Component {
  state = {
    review: [],
    steakhouse: {}
  };
  logout = e => {
    e.preventDefault();
    localStorage.setItem("JWT", null);
    window.location.href = "#/users/sign-in";
  };

  componentDidMount() {
    this.callReviews();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.steakhouse !== prevProps.match.params.steakhouse
    ) {
      this.callReviews();
    }
  }

  callReviews = () => {
    api.fetchReviews(this.props.match.params.steakhouse).then(response => {
      //console.log('callReviews: ', response);
      this.setState(() => {
        return {
          reviewsList: response.review,
          steakhouse: response.steakhouse
        };
      });
      //console.log('after SetState: ', this.state.reviews);
    });
  };

  render() {
    const { reviewsList, steakhouse } = this.state;
    console.log("reviewsList", reviewsList);
    return (
      <Router>
        <div className="App__Form">
          <div className="LogoutHolder">
          <div className="PageSwitcher">
            <NavLink
              exact
              to="/steakhouses/info"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item-logout"
            >
              Go Back
            </NavLink>
            <button
              onClick={this.logout}
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item-logout"
            >
              Logout
            </button>
          </div>
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
          <div className="Reviews">
            <div className="Select_Steakhouse">
              <h2>{steakhouse.name}</h2>
              <div>{steakhouse.address}</div>
            </div>
            {reviewsList &&
              reviewsList.length > 0 &&
              reviewsList.map(reviews => (
                <div key={reviews._id}>
                  <p className="Select_Steakhouse_Reviews">
                    <div>
                      <strong>Quality: </strong>
                      {reviews.quality} Stars
                    </div>
                    <div>
                      <strong>Value: </strong>
                      {reviews.value} Stars
                    </div>
                    <p>
                      <strong>Written Review: </strong>
                      "{reviews.comment}"
                    </p>
                  </p>
                </div>
              ))}
            <br />
          </div>
        </div>
      </Router>
    );
  }
}

export default SteakhouseInfo;
