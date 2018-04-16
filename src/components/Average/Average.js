import React from 'react';
import PropTypes from 'prop-types';
import './Average.css';

const Average = ({ channelSet, dataHelper }) => {
  const average = dataHelper.calculateAverage(channelSet);
  const averageCleaner = {
    power: Math.round(average),
    heartRate: Math.round(average),
    cadence: Math.round(average),
    temperature: Math.round(average * 10) / 10,
    elevation: Math.round(average),
    speed: Math.round(average * 100) / 100,
  };

  return (
    <article>
      <h4>{channelSet.toUpperCase()}</h4>
      <p>{averageCleaner[channelSet]}</p>
    </article>
  );
};

export default Average;

Average.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
