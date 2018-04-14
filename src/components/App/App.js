import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MapView from '../../views/MapView/MapView';
import MetricsView from '../../views/MetricsView/MetricsView';
import DataCleaner from '../DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      range: {
        low: 0,
        high: 0,
      },
    };
    this.dataHelper = new DataCleaner(workoutData);
    this.changeRange = this.changeRange.bind(this);
  }

  changeRange(start, end) {
    this.setState({
      range: {
        low: start,
        high: end,
      },
    });
  }

  render() {
    const { range } = this.state;

    return (
      <div className="App">
        <MetricsView
          range={range}
          changeRange={this.changeRange}
          dataHelper={this.dataHelper}
        />
        <MapView range={range} />
      </div>
    );
  }
}

export default App;
