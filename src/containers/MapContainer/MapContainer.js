import React, { Component } from 'react';
import API_KEYS from '../../../api-keys';
import Map from '../../components/Map/Map';
import './MapContainer.css';

const MapContainer = () => {
  const style = {
    width: '50%',
    height: '50%',
  };

  if (!this.props.loaded) {
    return (<div>Loading...</div>);
  }
  return (
    <div style={style}>
      <Map google={this.props.google} />
    </div>);
};

export default GoogleApiComponent({
  apiKey: API_KEYS.GOOGLE_MAPS,
});
