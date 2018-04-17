import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Graph from './Graph';
import DataHelper from '../DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('Graph', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      channelSet: '',
      dataHelper: {},
      range: [],
    };
  });

  describe('channelSet is defined', () => {
    beforeEach(() => { mockProps.channelSet = 'power'; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('dataHelper is defined', () => {
    beforeEach(() => { mockProps.dataHelper = new DataHelper(workoutData); });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('dataHelper is defined', () => {
    beforeEach(() => { mockProps.range = [0, 10]; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
