import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import API_KEYS from '../../api-keys';
import './GoogleMap.css';

export class GoogleMap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.range === prevState.range) {
      return null;
    }
    return {
      range: nextProps.range,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      range: props.range,
    };
  }

  createHighlightPolyline(coords) {
    return (
      <Polyline
        path={coords}
        strokeColor="#4EE46F"
        strokeOpacity={1}
        strokeWeight={3}
      />
    );
  }

  calculateGPSCoords(dataHelper, range) {
    const filteredRangeData = dataHelper.filterDataForMap(range);
    const GPSCoords = dataHelper.filterGPSCoords(filteredRangeData);

    return GPSCoords;
  }

  constructMarkers(coords) {
    return {
      start: {
        lat: coords[0].lat,
        lng: coords[0].lng,
      },
      finish: {
        lat: coords[coords.length - 1].lat,
        lng: coords[coords.length - 1].lng,
      },
    };
  }

  render() {
    const { dataHelper, originalRange } = this.props;
    const { range } = this.state;
    const style = { height: '35vh', width: '55vw' };
    const rangeCoords = this.calculateGPSCoords(dataHelper, range);
    const originalCoords = this.calculateGPSCoords(dataHelper, originalRange);
    const { start: startMarker, finish: finishMarker } = this.constructMarkers(rangeCoords);

    return (
      <div className="google-map-container">
        <Map
          className="google-map"
          google={this.props.google}
          onReady={() => console.log('ready')}
          zoom={12}
          style={style}
          initialCenter={{
            lat: originalCoords[Math.round(originalCoords.length / 6)].lat,
            lng: originalCoords[Math.round(originalCoords.length / 6)].lng,
          }}
        >
          <Marker
            title={`${range[0]}`}
            onClick={this.onMarkerClick}
            name="Current location"
            position={{ lat: startMarker.lat, lng: startMarker.lng }}
          />
          <Polyline
            path={originalCoords}
            strokeColor="#252525"
            strokeOpacity={0.8}
            strokeWeight={3}
          />
          {this.createHighlightPolyline(rangeCoords)}
          <Marker
            title={`${range[1]}`}
            onClick={this.onMarkerClick}
            name="Past location"
            position={{ lat: finishMarker.lat, lng: finishMarker.lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEYS.GOOGLE_MAPS,
})(GoogleMap);

GoogleMap.propTypes = {
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  originalRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};
