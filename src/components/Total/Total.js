import React from 'react';
import './Total.css';

const Total = ({ channelSet, dataHelper }) => {
  const total = dataHelper.calculateTotal(channelSet);
  const totalCleaner = {
    time: Math.round(total),
    distance: Math.round(total),
    elevation: Math.round(total),
  };

  return (
    <article>
      <h4>{channelSet.toUpperCase()}</h4>
      <p>{totalCleaner[channelSet]}</p>
    </article>
  );
};

export default Total;
