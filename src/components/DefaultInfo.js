import React, { Component } from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";
import * as api from "../api";

class DefaultInfo extends Component {
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
    
      callReviews = () => {
        api.fetchReviews(this.props.match.params.steakhouse).then(response => {
          console.log('callReviews: ', response);
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
    const { reviewsList } = this.state;
    console.log("reviewsList", reviewsList);
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
