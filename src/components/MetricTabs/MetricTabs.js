import React, { Component } from 'react';
import './MetricTabs.css';

const MetricTabs = ({ handleChannelChange }) =>
  (
    <div>
      <button onClick={e => handleChannelChange('power')}>Power</button>
      <button onClick={e => handleChannelChange('heartRate')}>HeartRate</button>
      <button onClick={e => handleChannelChange('cadence')}>Cadence</button>
      <button onClick={e => handleChannelChange('temperature')}>Temperature</button>
      <button onClick={e => handleChannelChange('elevation')}>Elevation</button>
    </div>
  );

export default MetricTabs;
