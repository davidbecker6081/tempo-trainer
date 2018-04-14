import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MetricTabs from '../../components/MetricTabs/MetricTabs';
import Graph from '../../components/Graph/Graph';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import './MetricsView.css';

class MetricsView extends Component {
  constructor() {
    super();
    this.state = {
      channelSet: 'power',
    };
  }

  render() {
    const { range, handleRangeChange, dataHelper } = this.props;
    const { channelSet } = this.state;

    return (
      <div>
        <MetricTabs />
        <Graph range={range} dataHelper={dataHelper} channelSet={channelSet} />
        <RangeSlider range={range} handleRangeChange={handleRangeChange} dataHelper={dataHelper} />
      </div>
    );
  }
}

export default MetricsView;
