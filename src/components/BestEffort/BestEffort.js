import React from 'react';
import './BestEffort.css';

const BestEffort = ({
  channelSet,
  timeForCalc,
  effort,
  timeRange,
}) =>
  (
    <article>
      <p>Best <span>{timeForCalc}</span> Average</p>
      <p>{channelSet}</p>
      <p>{effort}</p>
      <p>{timeRange.low} to {timeRange.high}</p>
    </article>
  );

export default BestEffort;
