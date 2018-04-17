import React from 'react';
import PropTypes from 'prop-types';
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
  originalRange,
}) =>
  (
    <div>
      <MetricTabs
        handleChannelChange={handleChannelChange}
      />
      <Graph
        range={range}
        dataHelper={dataHelper}
        channelSet={channelSet}
      />
      <RangeSlider
        range={range}
        handleRangeChange={handleRangeChange}
        dataHelper={dataHelper}
        originalRange={originalRange}
      />
    </div>
  );

export default MetricsView;

MetricsView.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    data: PropTypes.shape({}),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleRangeChange: PropTypes.func.isRequired,
  handleChannelChange: PropTypes.func.isRequired,
  originalRange: PropTypes.arrayOf(PropTypes.number).isRequired,
};
