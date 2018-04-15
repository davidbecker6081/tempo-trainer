import React from 'react';
import BestEffort from '../../components/BestEffort/BestEffort';
import './BestEffortsView.css';

const BestEffortsView = ({ channelSet, dataHelper }) => {
  const efforts = {
    1: dataHelper.calculateBestEffort(channelSet, 1),
    5: dataHelper.calculateBestEffort(channelSet, 5),
    10: dataHelper.calculateBestEffort(channelSet, 10),
    15: dataHelper.calculateBestEffort(channelSet, 15),
    20: dataHelper.calculateBestEffort(channelSet, 20),
  };

  return (
    <section>
      <BestEffort
        channelSet={channelSet}
        timeForCalc={1}
        timeRange={effort['1'].range}
        effort={effort['1'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={5}
        timeRange={effort['5'].range}
        effort={effort['5'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={10}
        timeRange={effort['10'].range}
        effort={effort['10'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={15}
        timeRange={effort['15'].range}
        effort={effort['15'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={20}
        timeRange={effort['20'].range}
        effort={effort['20'].average}
      />
    </section>
  );
};

export default BestEffortsView;
