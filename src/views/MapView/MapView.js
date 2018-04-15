import React from 'react';
import GoogleApiWrapper from '../../components/Map/GoogleMap';

const MapView = ({ range, dataHelper, originalRange }) =>
  (
    <div>
      <GoogleApiWrapper range={range} dataHelper={dataHelper} originalRange={originalRange} />
    </div>
  );

export default MapView;
