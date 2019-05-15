import React, { Component } from "react";
import * as api from "../api";
import Map from "./Map"
import SteakhouseInfo from "./SteakhouseInfo";
import { HashRouter as Router, NavLink, Link } from "react-router-dom";

class SteakhouseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSteakhouse: 1
    }
  }

  componentDidMount() {
    this.callValues();
    //console.log('componentDidMount: ', this.state.values);
  }

  callValues = () => {
    api
      .fetchValues()
      .then(response => {
        //console.log('callValues: ', response);
        this.setState(() => {
          return {
            steakhouseList: response
          };
        }); 
       //console.log('after SetState: ', this.state.values);
      })
      .catch(err => {
        //console.log('err', err)
        this.setState({
          error: true
        });
      });
  };

  render() {
    const {steakhouseList} = this.state;
    console.log("steakhouseList", steakhouseList);
    console.log("selectedSteakhouse", this.state)
    return (
        <Router path="/steakhouses/info">
            <div>
                <Map />
                <div className="Value">
                    {steakhouseList &&
                    steakhouseList.length > 0 &&   
                    this.state.steakhouseList.map(steakhouse => (
                            <button 
                                id="steakhouseInfo"
                                className="btn"
                                key={steakhouse._id}
                                onClick={() =>
                                    selectedSteakhouse = steakhouse
                                }
                            >
                                {steakhouse.name}
                            </button>
                    ))}
                </div>
            </div>
        </Router>
    );
  }
}

export default SteakhouseList;
