import React, { Component } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
import * as api from "../api";

class DefaultInfo extends Component {
  state = {
    review: [],
    steakhouse: {},
    errorOccured: false,
    errorMessage: ""
  };
  logout = e => {
    e.preventDefault();
    localStorage.setItem("JWT", null);
    window.location.href = "#/users/sign-in";
  };

  componentDidMount() {
    this.callReviews();
  }

  callReviews = () => {
    api.fetchReviews(this.props.match.params.steakhouse).then(response => {
      if (response.error) {
        this.setState(() => {
          return {
            errorOccured: true,
            errorMessage: response.error
          };
        });
      } if (response.message) {
        alert(response.message)
      } else {
        this.setState(() => {
          return {
            reviewsList: response.review,
            steakhouse: response.steakhouse
          };
        });
      }
    });
  };

  render() {
    const { reviewsList } = this.state;
    console.log("reviewsList", reviewsList);
    if (this.state.errorOccured === true) {throw this.state.errorMessage}
    return (
      <Router path="/steakhouses/info">
        <div className="App__Form">
          <div className="PageSwitcher">
            <button
              className="PageSwitcher__Item-logout PageSwitcher__Solo"
              variant="contained"
              color="primary"
              onClick={this.logout}
            >
              Logout
            </button>
            <br />
          </div>
          <div className="FormTitle">
            <NavLink
              to={"/steakhouses/info"}
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Find Steak
            </NavLink>
          </div>
          <div className="Reviews">
            <h2 className="Select_Steakhouse">Recent Reviews</h2>
            {reviewsList &&
              reviewsList.length > 0 &&
              reviewsList.map(reviews => (
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
                    <strong>Written Review: </strong>"{reviews.comment}"
                  </p>
                </p>
              ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default DefaultInfo;
