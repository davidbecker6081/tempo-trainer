import React from 'react';
import PropTypes from 'prop-types';
import Total from '../../components/Total/Total';
import './TotalsView.css';

const TotalsView = ({ dataHelper }) =>
  (
    <section className="flex-center totals-view">
      <h2>Totals</h2>
      <div className="totals-wrapper flex-center">
        <Total dataHelper={dataHelper} channelSet="millisecondOffset" />
        <Total dataHelper={dataHelper} channelSet="distance" />
        <Total dataHelper={dataHelper} channelSet="elevation" />
      </div>
    </section>
  );

export default TotalsView;

TotalsView.propTypes = {
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
