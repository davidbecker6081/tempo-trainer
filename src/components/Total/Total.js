import React from 'react';
import PropTypes from 'prop-types';
import './Total.css';

const Total = ({ channelSet, dataHelper }) => {
  const lastEntry = dataHelper.data.samples[dataHelper.data.samples.length - 1];
  const totalMilli = lastEntry.millisecondOffset;
  const totalCleaner = {
    millisecondOffset: Math.round(dataHelper.convertMilliToMin(totalMilli) * 10) / 10,
    distance: Math.round((lastEntry.values.distance / 5280) * 100) / 100,
    elevation: Math.round(dataHelper.calculateTotalElevationGain()),
  };
  const channelCleaner = {
    millisecondOffset: 'time',
    distance: 'distance',
    elevation: 'elevation gain',
  };
  const descriptors = {
    millisecondOffset: 'minutes',
    distance: 'miles',
    elevation: 'ft',
  };

  return (
    <article>
      <h4>
        {channelCleaner[channelSet].toUpperCase()}
      </h4>
      <p>
        {totalCleaner[channelSet]} <span>{descriptors[channelSet]}</span>
      </p>
    </article>
  );
};

export default Total;

Total.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.shape([]),
    GPSCoords: PropTypes.shape([]),
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
