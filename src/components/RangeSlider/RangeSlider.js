import React from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './RangeSlider.css';

const RangeSlider = ({ originalRange, handleRangeChange, range }) => {
  const min = originalRange[0];
  const max = originalRange[1];
  const style = { width: '50vw', height: '5vh' };

  return (
    <div>
      <div className="current-range">
        <p>Start: <span className="current-range-num">{range[0]}</span>min</p>
        <p>End: <span className="current-range-num">{range[1]}</span>min</p>
      </div>
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
};


export default RangeSlider;

RangeSlider.propTypes = {
  handleRangeChange: PropTypes.func.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  originalRange: PropTypes.arrayOf(PropTypes.number).isRequired,
};
