import React from 'react';
import MetricTabs from '../../components/MetricTabs/MetricTabs';
import Graph from '../../components/Graph/Graph';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import './MetricsView.css';

const MetricsView = ({
  range,
  handleRangeChange,
  dataHelper,
  channelSet,
  handleChannelChange,
}) =>
  (
    <div>
      <MetricTabs handleChannelChange={handleChannelChange} />
      <Graph range={range} dataHelper={dataHelper} channelSet={channelSet} />
      <RangeSlider range={range} handleRangeChange={handleRangeChange} dataHelper={dataHelper} />
    </div>
  );

export default MetricsView;
