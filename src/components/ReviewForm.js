
import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import Rating from './rating';

class ReviewForm extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.setItem('JWT', null);
    window.location.href = '#/users/sign-in'  };
  render() {
    return (
      <Router path="/steakhouses/review">
        <div className="App__Form">
          <div className="LogoutHolder">
            <button className="Logout" variant="contained" color="primary" onClick={this.logout}>
              logout
            </button><br />
          </div>
          <div className="FormTitle">
            <NavLink to="/steakhouses/info" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Find Steak</NavLink> or <NavLink exact to="/steakhouses/review" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Write A Review</NavLink>
          </div>

          <div className="FormCenter">
            <div id="writeReview">Write a review</div>
            <form onSubmit={this.handleSubmit} className="FormFields" method="POST" action="http://localhost:3000/api/users/review">
              <div className="FormField">
                <textarea rows={10} cols={50} defaultValue={""} id="comment" className="FormReview" placeholder="How was your experience?" name="comment" />
              </div>
              <p>
                <Rating />
                <br />
              </p>
                            
              <div className="FormField">
                <button /*onClick Logic for POST request*/ className="FormField__Button mr-20">Post</button>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default ReviewForm;
