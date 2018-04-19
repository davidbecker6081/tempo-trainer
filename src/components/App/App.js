import React, { Component } from 'react';
import { Route } from 'react-router';
import MapView from '../../views/MapView/MapView';
import MetricsView from '../../views/MetricsView/MetricsView';
import BestEffortsView from '../../views/BestEffortsView/BestEffortsView';
import AveragesView from '../../views/AveragesView/AveragesView';
import TotalsView from '../../views/TotalsView/TotalsView';
import NavigationView from '../../views/NavigationView/NavigationView';
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
    const minMax = this.dataHelper.getMinMax();
    this.setState({
      range: minMax,
      originalRange: minMax,
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
        <NavigationView />
        <Route
          to="/"
          render={() =>
            (
              <main className="flex-center">
                <h1 className="tempo-trainer">TEMPO TRAINER</h1>
                <MetricsView
                  range={range}
                  handleRangeChange={this.handleRangeChange}
                  dataHelper={this.dataHelper}
                  channelSet={channelSet}
                  handleChannelChange={this.handleChannelChange}
                  originalRange={originalRange}
                />
                <MapView
                  range={range}
                  dataHelper={this.dataHelper}
                  originalRange={originalRange}
                />
                <section className="effort-average-container flex-center">
                  <BestEffortsView
                    dataHelper={this.dataHelper}
                    channelSet={channelSet}
                  />
                  <AveragesView
                    dataHelper={this.dataHelper}
                  />
                </section>
                <TotalsView
                  dataHelper={this.dataHelper}
                />
              </main>
            )
          }
        />
      </div>
    );
  }
}

export default App;
