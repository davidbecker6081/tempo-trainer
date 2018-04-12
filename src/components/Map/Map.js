import React, { Component } from 'react';

class Map extends Component {
  constructor() {
    super();
    this.map = React.createRef();
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    
  }

  render() {
    return (
      <div ref={this.map}>
        Loading map...
      </div>
    );
  }
}

export default Map;
