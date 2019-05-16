import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import logo from "../img/logo.svg";
import * as auth from "../auth";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      auth.auth()
      .then(isLogged => {
        console.log(isLogged);
        if (isLogged.loggedIn === false) {
          alert("Error: Not logged in. Please log in.");
          window.location.href = "#/users/sign-in";
        }
      });
  }


  render() {
    return (
      <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} >
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
          {this.props.steakhouseList.map(function(item, i) {
            var coordinates = { lat: parseFloat(item.coordinates.latitude), lng: parseFloat(item.coordinates.longitude) };
            return <Marker key={i} position={coordinates} />;
          })}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
