import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


class Map extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey=""
      >
        <GoogleMap
          id="map-markers"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={10.5}
          center={{
            lat: 40.65,
            lng: -122.3917
          }}
          >     
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.575581,
              lng: -122.357737
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.581685,
              lng: -122.389432
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.586457,
              lng: -122.356254
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.579811,
              lng: -122.357479
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.738597,
              lng: -122.238035
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.566260,
              lng: -122.361811
            }}
          />
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 40.586133,
              lng: -122.391871
            }}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map; 