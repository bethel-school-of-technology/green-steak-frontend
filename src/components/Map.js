import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class Map extends Component {


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
