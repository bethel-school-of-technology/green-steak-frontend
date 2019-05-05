import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import Rating from './rating';


class ReviewForm extends Component {
  render() {

    return (
      <Router path="/users/review">
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/users/example" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">About</NavLink>
            <NavLink exact to="/users/review" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Review</NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/users/example" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Find Steak</NavLink> or <NavLink exact to="/users/review" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Write A Review</NavLink>
          </div>
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" method="POST" action="http://localhost:3000/api/users/review">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="review">Write a Review</label>
                <input type="text" id="review" className="FormField__Input" placeholder="How was your experience?" name="review" />
              </div>
              <div className="FormField">
                <button /*onClick Logic for POST request*/ className="FormField__Button mr-20">Post</button>
              </div>

              <Rating />
              <div>
                <p className="comments">
                  Describe your steakhouse experience:
            <br />
                  <textarea rows={10} cols={50} name="rating" defaultValue={""} />
                  <button>Submit</button>
                </p>
                {/* </div> */}
              </div>

            </form>
          </div>
        </div>
      </Router>
    );
  }
}


export default ReviewForm;