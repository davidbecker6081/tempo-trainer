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
    <section className="container metrics-view">
      <h2>Metrics</h2>
      <article className="metrics-view-wrapper">
        <MetricTabs
          handleChannelChange={handleChannelChange}
          channelSet={channelSet}
        />
        <Graph
          range={range}
          dataHelper={dataHelper}
          channelSet={channelSet}
        />
        <RangeSlider
          range={range}
          handleRangeChange={handleRangeChange}
          originalRange={originalRange}
        />
      </article>
    </section>
  );

export default MetricsView;

MetricsView.propTypes = {
  channelSet: PropTypes.string.isRequired,
  dataHelper: PropTypes.shape({
    originalData: PropTypes.shape({}),
    minuteData: PropTypes.arrayOf(PropTypes.shape({})),
    channels: PropTypes.arrayOf(PropTypes.string),
    GPSCoords: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleRangeChange: PropTypes.func.isRequired,
  handleChannelChange: PropTypes.func.isRequired,
  originalRange: PropTypes.arrayOf(PropTypes.number).isRequired,
};
