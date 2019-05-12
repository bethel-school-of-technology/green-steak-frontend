
import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import Rating from './rating';

class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      identifier: "5cd31ade921b8c035ae51222" ,
      //Logan's statehouse used as example until select steakhouse function is complete
      comment: "",
      ratePrice: "",
      rateQuality: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  logout = e => {
    e.preventDefault();
    localStorage.setItem('JWT', null);
    window.location.href = '#/users/sign-in'  };

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
    .axios("http://localhost:3001/api/reviews/submit", {
      method: "POST",
      data: this.state,
      headers: {
        Authorization: `JWT ${localStorage.getItem("JWT")}`
      }
    }).then(response => {
      console.log(response)
      var responseData = response.data;
      if (responseData.message) {
        alert(responseData.message)
      } else {
      alert("Error")
      }
    })
  }

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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <textarea rows={10} cols={50} defaultValue={""} id="comment" className="FormReview" placeholder="How was your experience?" name="comment" onChange={this.handleChange}/>
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
};

export default ReviewForm;
