import React from 'react';
import PropTypes from 'prop-types';
import GoogleApiWrapper from '../../components/Map/GoogleMap';
import './MapView.css';

const MapView = ({ range, dataHelper, originalRange }) =>
  (
    <section className="container map-view">
      <h2>Your Run</h2>
      <GoogleApiWrapper
        className="google-map-wrapper"
        style={{ position: 'static', height: '30vh', width: '45vw' }}
        range={range}
        dataHelper={dataHelper}
        originalRange={originalRange}
      />
    </section>
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
