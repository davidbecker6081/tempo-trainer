import React from 'react';
import PropTypes from 'prop-types';
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
        timeRange={efforts['1'].range}
        effort={efforts['1'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={5}
        timeRange={efforts['5'].range}
        effort={efforts['5'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={10}
        timeRange={efforts['10'].range}
        effort={efforts['10'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={15}
        timeRange={efforts['15'].range}
        effort={efforts['15'].average}
      />
      <BestEffort
        channelSet={channelSet}
        timeForCalc={20}
        timeRange={efforts['20'].range}
        effort={efforts['20'].average}
      />
    </section>
  );
};

export default BestEffortsView;

BestEffortsView.propTypes = {
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.shape([]),
    GPSCoords: PropTypes.shape([]),
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
