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
        'Authorization': `JWT ${localStorage.getItem('JWT')}`}
      }).then(isLogged => {
        console.log(isLogged)
        if (isLogged.data.loggedIn === false) {
          alert('Error: Not logged in. Please log in.');
          window.location.href = '#/users/sign-in'
        }
      })
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
        <h1 className="App_Name">
          Green
          <img className="Logo_Img" src={logo} />
          Steak
        </h1>
        <GoogleMap
          mapContainerClassName="Map"
          id="map-markers"
          mapContainerStyle={{
            height: "50%",
            width: "75%"
          }}
          zoom={11}
          center={{
            lat: 40.65,
            lng: -122.391678
          }}
        >
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.575581,
              lng: -122.357737
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.581685,
              lng: -122.389432
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.586457,
              lng: -122.356254
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.579811,
              lng: -122.357479
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.738597,
              lng: -122.238035
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.56626,
              lng: -122.361811
            }}
          />
          <Marker
            onLoad={marker => {
              console.log("marker: ", marker);
            }}
            position={{
              lat: 40.586133,
              lng: -122.391871
            }}
          />
        </GoogleMap>
        <div className="Value">
          {values &&
            values.length > 0 &&
            values.map(val => (
              <button onClick="#" key={val._id}>
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
