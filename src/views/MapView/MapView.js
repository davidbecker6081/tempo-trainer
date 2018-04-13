import React, { Component } from 'react';
import GoogleApiWrapper from '../../components/Map/GoogleMap';

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      range: {
        low: 0,
        high: 100,
      },
    };
  }

  render() {
    const { range } = this.state;

    return (
      <div>
        <GoogleApiWrapper range={range} />
      </div>
    );
  }
}

export default MapView;
