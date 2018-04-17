import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BestEffort from './BestEffort';

describe('BestEffort', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      channelSet: '',
      timeForCalc: 0,
      effort: 0,
      timeRange: {
        low: 0,
        high: 0,
      },
    };
  });

  describe('channelSet is defined', () => {
    beforeEach(() => { mockProps.channelSet = 'power'; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('timeForCalc is defined', () => {
    beforeEach(() => { mockProps.timeForCalc = 1; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('effort is defined', () => {
    beforeEach(() => { mockProps.effort = 1; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('timeRange is defined', () => {
    beforeEach(() => {
      mockProps.timeRange.low = 0;
      mockProps.timeRange.high = 20;
    });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
