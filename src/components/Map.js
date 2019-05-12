import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import logo from "../img/logo.svg";
import * as api from "../api";

class Map extends Component {
  state = {
    values: [],
    error: false
  };

  componentDidMount() {
    window
      .axios("http://localhost:3001/user/ensure", {
        method: "GET",
        headers: {
          Authorization: `JWT ${localStorage.getItem("JWT")}`
        }
      })
      .then(isLogged => {
        console.log(isLogged);
        if (isLogged.data.loggedIn === false) {
          alert("Error: Not logged in. Please log in.");
          window.location.href = "#/users/sign-in";
        }
      });
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
            values: response
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
    const { values, error } = this.state;
    console.log("values", values);

    return (
      <LoadScript id="script-loader" googleMapsApiKey="">
        <GoogleMap
          mapContainerClassName="Map"
          id="map-markers"
          mapContainerStyle={{
            height: "50vh",
            width: "75%"
          }}
          zoom={11}
          center={{
            lat: 40.586162,
            lng: -122.371454
          }}
        >
          {this.state.values.map(function(item, i) {
            var coordinates = { lat: parseFloat(item.coordinates.latitude), lng: parseFloat(item.coordinates.longitude) };
            return <Marker key={i} position={coordinates} />;
          })}
        </GoogleMap>
        <div className="Value">
          {values &&
            values.length > 0 &&
            values.map(val => (
              <button className="btn" onClick={function() {window.location.href = '#/steakhouses/info/' + val._id}} key={val._id}>
                {val.name}
              </button>
            ))}
          {error && <h1>Error!</h1>}
        </div>
        ;
      </LoadScript>
    );
  }
}

export default Map;
