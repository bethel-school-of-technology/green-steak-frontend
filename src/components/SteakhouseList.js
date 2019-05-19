import React, { Component } from "react";
import * as api from "../api";
import Map from "./Map";
import { HashRouter as Router } from "react-router-dom";
import * as auth from "../auth";

class SteakhouseList extends Component {
  constructor() {
    super();

    this.state = {
      steakhouseList: [],
      errorOccured: false,
      errorMessage: ""
    };
  }

  componentWillMount() {
    auth.auth().then(response => {
      if (response.error) {
        this.setState(() => {
          return {
            errorOccured: true,
            errorMessage: response.error
          };
        });
      } else {
      if (response.loggedIn === false) {
        alert("Error: Not logged in. Please log in.");
        window.location.href = "#/sign-in";
      }}
    });
  }

  componentDidMount() {
    this.callValues();
  }

  callValues = () => {
    api
      .fetchValues()
      .then(response => {
        if (response.error) {
          this.setState(() => {
            return {
              errorOccured: true,
              errorMessage: response.error
            };
          });
        } else {
        this.setState(() => {
          return {
            steakhouseList: response
          };
        });}
      })
  };

  render() {
    const { steakhouseList, error } = this.state;
    if (this.state.errorOccured === true) {throw this.state.errorMessage}
    return (
      <Router path="/steakhouses/info">
        <div>
          <Map steakhouseList={this.state.steakhouseList} />
          <div className="Value">
            {steakhouseList &&
              steakhouseList.length > 0 &&
              steakhouseList.map(val => (
                <button
                  className="btn"
                  onClick={function() {
                    window.location.href = "#/steakhouses/info/" + val._id;
                  }}
                  key={val._id}
                >
                  {val.name}
                </button>
              ))}
            {error && <h1>Error!</h1>}
          </div>
          <div className="ValueMobile">
            <select
              className="drpdwn"
              onChange={function(event) {
                window.location.href =
                  "#/steakhouses/info/" + event.target.value;
              }}
            >
              <option value="">Select Steakhouse</option>
              {steakhouseList &&
                steakhouseList.length > 0 &&
                steakhouseList.map(val => (
                  <option key={val._id} value={val._id}>
                    {val.name}
                  </option>
                ))}
            </select>
            <span className="drpdwnArrow">▼</span>
            {error && <h1>Error!</h1>}
          </div>
        </div>
      </Router>
    );
  }
}

export default SteakhouseList;
