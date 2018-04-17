import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TotalsView from './TotalsView';
import DataHelper from '../../components/DataCleaner/DataCleaner';
import workoutData from '../../__mock__/workout-data.json';

describe('TotalsView', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      dataHelper: {},
    };
  });

  describe('dataHelper is defined', () => {
    beforeEach(() => { mockProps.dataHelper = new DataHelper(workoutData); });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
