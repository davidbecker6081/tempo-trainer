import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import API_KEYS from '../../api-keys';

export class GoogleMap extends Component {
  constructor() {
    super();
  }

  render() {
    const { range, dataHelper } = this.props;
    const style = { height: '50%', width: '50%' };
    const filteredRangeData = dataHelper.filterDataForMap(range);
    const GPSCoords = dataHelper.filterGPSCoords(filteredRangeData);
    const startMarker = {
      lat: GPSCoords[0].lat,
      lng: GPSCoords[0].lng,
    };
    const finishMarker = {
      lat: GPSCoords[GPSCoords.length - 1].lat,
      lng: GPSCoords[GPSCoords.length - 1].lng,
    };
    const middleOfRun = {
      lat: GPSCoords[GPSCoords.length / 2].lat,
      lng: GPSCoords[GPSCoords.length / 2].lng,
    };

    return (
      <Map
        google={this.props.google}
        onReady={() => console.log('ready')}
        zoom={12}
        style={style}
        initialCenter={{
            lat: middleOfRun.lat,
            lng: middleOfRun.lng,
        }}
      >

        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          position={{ lat: startMarker.lat, lng: startMarker.lng }}
        />
        <Polyline
          path={GPSCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
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
