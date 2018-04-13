import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import API_KEYS from '../../api-keys';

export class GoogleMap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.range === prevState.timeRange) {
      return null;
    }
    return {
      timeRange: {
        low: nextProps.range.low,
        high: nextProps.range.high,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      timeRange: {
        low: props.range.low,
        high: props.range.high,
      },
    };
  }


  render() {
    const { timeRange } = this.state;
    const style = { height: '50%', width: '50%' };
    const coords = [
      { lat: 40.86, lng: -88.082 },
      { lat: 40.86, lng: -88.084 },
      { lat: 40.84, lng: -88.086 },
      { lat: 40.84, lng: -88.088 },
    ];

    return (
      <Map
        google={this.props.google}
        onReady={() => console.log('ready')}
        zoom={14}
        style={style}
        initialCenter={{
            lat: 40.854885,
            lng: -88.081807,
        }}
      >

        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          position={{ lat: 40.86, lng: -88.082 }}
        />
        <Polyline
          path={coords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
        <Marker
          onClick={this.onMarkerClick}
          name="Past location"
          position={{ lat: 40.84, lng: -88.088 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEYS.GOOGLE_MAPS,
})(GoogleMap);
