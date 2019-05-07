import React, { Component } from 'react';
<<<<<<< Updated upstream
import { HashRouter as Router, NavLink, } from 'react-router-dom';
import Rating from './rating';
=======
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import Rating from './Rating';
>>>>>>> Stashed changes


class ReviewForm extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.setItem('JWT', null);
    window.location.href = '#/users/sign-in'  };
  render() {
    return (
      <Router path="/steakhouses/review">
        <div className="App__Form">
          <button variant="contained" color="primary" onClick={this.logout}>
              logout
          </button>
          <div className="PageSwitcher">
            <NavLink to="/steakhouses/info" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">About</NavLink>
            <NavLink exact to="/steakhouses/review" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Review</NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/steakhouses/info" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Find Steak</NavLink> or <NavLink exact to="/steakhouses/review" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Write A Review</NavLink>
          </div>

          <div className="FormCenter">
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
