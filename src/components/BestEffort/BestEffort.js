import React from 'react';
import PropTypes from 'prop-types';
import './BestEffort.css';

const BestEffort = ({
  channelSet,
  timeForCalc,
  effort,
  timeRange,
}) => {
  const effortCleaner = {
    power: Math.round(effort),
    heartRate: Math.round(effort),
    cadence: Math.round(effort),
    temperature: Math.round(effort * 10) / 10,
    elevation: Math.round(effort),
    speed: Math.round(effort * 100) / 100,
  };

  const timeCleaner = {
    low: Math.round((timeRange.low / 60000) * 10) / 10,
    high: Math.round((timeRange.high / 60000) * 10) / 10,
  };

  return (
    <article>
      <p>Best <span>{timeForCalc}</span> Minute</p>
      <p>{channelSet.toUpperCase()}</p>
      <p>Average</p>
      <p>{effortCleaner[channelSet]}</p>
      <p>Minute {timeCleaner.low} to Minute {timeCleaner.high}</p>
    </article>
  );
};

export default BestEffort;

BestEffort.propTypes = {
  channelSet: PropTypes.string.isRequired,
  timeForCalc: PropTypes.number.isRequired,
  effort: PropTypes.number.isRequired,
  timeRange: PropTypes.shape({
    low: PropTypes.number,
    high: PropTypes.number,
  }).isRequired,
};
