import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MetricTabs from './MetricTabs';

describe('MetricTabs', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      handleChannelChange: () => {},
    };
  });

  it('should render correclty', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
