import React from 'react';
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
