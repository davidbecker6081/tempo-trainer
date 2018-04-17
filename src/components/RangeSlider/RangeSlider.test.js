import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RangeSlider from './RangeSlider';

describe('RangleSlider', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      originalRange: [],
      handleRangeChange: () => {},
      range: [],
    };
  });

  describe('originalRange is defined', () => {
    beforeEach(() => { mockProps.originalRange = [1, 5]; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('range is defined', () => {
    beforeEach(() => { mockProps.range = [0, 5]; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
