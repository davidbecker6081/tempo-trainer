import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import API_KEYS from '../../api-keys';

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
        strokeColor="#00FFBB"
        strokeOpacity={0.5}
        strokeWeight={3}
      />
    );
  }

  render() {
    const { dataHelper, originalRange } = this.props;
    const { range } = this.state;
    const style = { height: '50%', width: '50%' };
    const filteredRangeData = dataHelper.filterDataForMap(range);
    const GPSCoords = dataHelper.filterGPSCoords(filteredRangeData);
    const filteredOriginalRange = dataHelper.filterDataForMap(originalRange);
    const originalCoords = dataHelper.filterGPSCoords(filteredOriginalRange);
    // console.log(GPSCoords, range, filteredRangeData)
    const startMarker = {
      lat: GPSCoords[0].lat,
      lng: GPSCoords[0].lng,
    };
    const finishMarker = {
      lat: GPSCoords[GPSCoords.length - 1].lat,
      lng: GPSCoords[GPSCoords.length - 1].lng,
    };

    return (
      <Map
        google={this.props.google}
        onReady={() => console.log('ready')}
        zoom={12}
        style={style}
        initialCenter={{
            lat: originalCoords[0].lat,
            lng: originalCoords[0].lng,
        }}
      >

        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          position={{ lat: startMarker.lat, lng: startMarker.lng }}
        />
        <Polyline
          path={originalCoords}
          strokeColor="#000000"
          strokeOpacity={0.8}
          strokeWeight={3}
        />
        {this.createHighlightPolyline(GPSCoords)}
        <Marker
          onClick={this.onMarkerClick}
          name="Past location"
          position={{ lat: finishMarker.lat, lng: finishMarker.lng }}
        />
      </Map>
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
