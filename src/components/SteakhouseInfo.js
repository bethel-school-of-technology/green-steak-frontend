import React, { Component } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
import * as api from "../api";

class SteakhouseInfo extends Component {
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
        }
      });}
      //console.log('after SetState: ', this.state.reviews);
    });
  };

  render() {
    
    const { reviewsList, steakhouse } = this.state;
    console.log("reviewsList", reviewsList);
    if (this.state.errorOccured === true) {throw this.state.errorMessage}
    return (
      <Router>
        <div className="App__Form">
          <div className="LogoutHolder">
            <NavLink
              exact
              to="/steakhouses/info"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item-logout"
            >
              Go Back
            </NavLink>
            <span class="seperator"></span>
            <NavLink
              onClick={this.logout}
              to="#"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item-logout"
            >
              Logout
            </NavLink>
          </div>
            <br />
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
