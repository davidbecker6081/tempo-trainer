import React from 'react';
import PropTypes from 'prop-types';
import './MetricTabs.css';

const MetricTabs = ({ handleChannelChange, channelSet }) => {
  const classMap = {
    power: 'tab',
    heartRate: 'tab',
    cadence: 'tab',
    temperature: 'tab',
    elevation: 'tab',
    speed: 'tab',
  };
  classMap[channelSet] = 'tab tab-active';
  return (
    <div className="tab-container">
      <button className={classMap.power} onClick={e => handleChannelChange('power')}>Power</button>
      <button className={classMap.heartRate} onClick={e => handleChannelChange('heartRate')}>HeartRate</button>
      <button className={classMap.cadence} onClick={e => handleChannelChange('cadence')}>Cadence</button>
      <button className={classMap.temperature} onClick={e => handleChannelChange('temperature')}>Temperature</button>
      <button className={classMap.elevation} onClick={e => handleChannelChange('elevation')}>Elevation</button>
      <button className={classMap.speed} onClick={e => handleChannelChange('speed')}>Speed</button>
    </div>
  );
};

export default MetricTabs;

MetricTabs.propTypes = {
  handleChannelChange: PropTypes.func.isRequired,
};
