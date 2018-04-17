import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MapView from './MapView';
import DataHelper from '../../components/DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('MapView', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      originalRange: [],
      dataHelper: {},
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
  describe('dataHelper is defined', () => {
    beforeEach(() => { mockProps.dataHelper = new DataHelper(workoutData); });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
