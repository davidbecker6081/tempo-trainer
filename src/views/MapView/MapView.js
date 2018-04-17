import React from 'react';
import PropTypes from 'prop-types';
import GoogleApiWrapper from '../../components/Map/GoogleMap';
import './MapView.css';

const MapView = ({ range, dataHelper, originalRange }) =>
  (
    <div>
      <GoogleApiWrapper
        className="google-map-wrapper"
        range={range}
        dataHelper={dataHelper}
        originalRange={originalRange}
      />
    </div>
  );

export default MapView;

MapView.propTypes = {
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  originalRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};
