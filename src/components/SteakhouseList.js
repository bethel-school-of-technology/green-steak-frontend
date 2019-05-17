import React, { Component } from "react";
import * as api from "../api";
import Map from "./Map";
import SteakhouseInfo from "./SteakhouseInfo";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";
import * as auth from "../auth";

class SteakhouseList extends Component {
  constructor() {
    super();
    super()

    this.state = {
      steakhouseList: []
    };
  }

  componentWillMount() {
    auth.auth().then(isLogged => {
      console.log(isLogged);
      if (isLogged.loggedIn === false) {
        alert("Error: Not logged in. Please log in.");
        window.location.href = "#/users/sign-in";
      }
    });
  }

  componentDidMount() {
    this.callValues();
  }

  callValues = () => {
    api
      .fetchValues()
      .then(response => {
        this.setState(() => {
          return {
            steakhouseList: response
          };
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    const { steakhouseList, error } = this.state;
    return (
      <Router path="/steakhouses/info">
        <div>
          <Map 
            steakhouseList={this.state.steakhouseList}
          />
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
                window.location.href = "#/steakhouses/info/" + event.target.value ;
              }}
            >
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
