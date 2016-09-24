'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';

const mapDefaults = {
  lat: 51.505,
  lng: -0.09,
  zoom: 3,
}


class MapView extends React.Component {
  // REACT Events
  componentWillMount() {
    var query = this.props.location.query;
    query.lat = (!!query.lat && !isNaN(parseInt(query.lat))) ? parseInt(query.lat) : mapDefaults.lat;
    query.lng = (!!query.lng && !isNaN(parseInt(query.lng))) ? parseInt(query.lng) : mapDefaults.lng;
    query.zoom = (!!query.zoom && !isNaN(parseInt(query.zoom))) ? parseInt(query.zoom) : mapDefaults.zoom;
  }

  componentDidMount() {
    this.map = L.map(ReactDOM.findDOMNode(this.refs.map), {
      center: [51.505, -0.09],
      zoom: this.props.location.query.zoom
    });
    this.setBasemap();
    this.listeners();
  }

  listeners() {
    this.map.on('zoomend', this.onZoomEnd.bind(this));
  }

  // MAP Events
  setBasemap() {
    this.basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
  }

  // UI Events
  onZoomEnd(e) {
    this.setState({
      zoom: this.map.getZoom()
    })
  }

  // Render
  render(){
    var query = this.props.location.query;
    return <div>
      <div id="map" className="c-map" ref="map"></div>
    </div>;
  }
};

export default MapView;
