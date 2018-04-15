import React from 'react';
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
