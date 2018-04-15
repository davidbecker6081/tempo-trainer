import React, { Component } from 'react';
import GoogleApiWrapper from '../../components/Map/GoogleMap';

const MapView = ({ range, dataHelper }) =>
  (
    <div>
      <GoogleApiWrapper range={range} dataHelper={dataHelper} />
    </div>
  );

export default MapView;
