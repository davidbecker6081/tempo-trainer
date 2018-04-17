import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Average from './Average';
import DataHelper from '../DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('Average', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      channelSet: '',
      dataHelper: {},
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
});
