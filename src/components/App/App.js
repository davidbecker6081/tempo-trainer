import React, { Component } from 'react';
import MapView from '../../views/MapView/MapView';
import MetricsView from '../../views/MetricsView/MetricsView';
import BestEffortsView from '../../views/BestEffortsView/BestEffortsView';
import DataCleaner from '../DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      range: [0, 100],
      channelSet: 'power',
      originalRange: [0, 86],
    };
    this.dataHelper = new DataCleaner(workoutData);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
  }

  componentWillMount() {
    this.dataHelper.setMinMax();
    this.setState({
      range: [this.dataHelper.min, this.dataHelper.max],
    });
  }

  handleChannelChange(channel) {
    this.setState({
      channelSet: channel,
    });
  }

  handleRangeChange(value) {
    this.setState({
      range: value,
    });
  }

  render() {
    const { range, channelSet, originalRange } = this.state;

    return (
      <div className="App">
        <MetricsView
          range={range}
          handleRangeChange={this.handleRangeChange}
          dataHelper={this.dataHelper}
          channelSet={channelSet}
          handleChannelChange={this.handleChannelChange}
        />
        <MapView
          range={range}
          dataHelper={this.dataHelper}
          originalRange={originalRange}
        />
        <BestEffortsView
          dataHelper={this.dataHelper}
          channelSet={channelSet}
        />
      </div>
    );
  }
}

export default App;
