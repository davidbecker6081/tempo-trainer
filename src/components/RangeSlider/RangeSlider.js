import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './RangeSlider.css';

class RangeSlider extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 0,
    };
  }

  componentWillMount() {
    const { dataHelper } = this.props;
    dataHelper.setMinMax();
    this.setState({
      min: dataHelper.min,
      max: dataHelper.max,
    });
  }

  render() {
    const { min, max } = this.state;
    const { handleRangeChange, range } = this.props;
    const style = { width: '50vw', height: '10vh' };

    return (
      <div>
        <Range
          min={min}
          max={max}
          allowCross={false}
          onChange={e => handleRangeChange(e)}
          defaultValue={[min, max]}
          value={range}
          style={style}
          pushable={1}
        />
      </div>
    );
  }
}

export default RangeSlider;