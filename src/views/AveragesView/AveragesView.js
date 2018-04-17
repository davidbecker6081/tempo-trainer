import React from 'react';
import PropTypes from 'prop-types';
import Average from '../../components/Average/Average';
import './AveragesView.css';

const AveragesView = ({ dataHelper }) =>
  (
    <section>
      <Average dataHelper={dataHelper} channelSet="power" />
      <Average dataHelper={dataHelper} channelSet="heartRate" />
      <Average dataHelper={dataHelper} channelSet="cadence" />
      <Average dataHelper={dataHelper} channelSet="temperature" />
      <Average dataHelper={dataHelper} channelSet="elevation" />
      <Average dataHelper={dataHelper} channelSet="speed" />
    </section>
  );

export default AveragesView;

AveragesView.propTypes = {
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
