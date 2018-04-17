import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let mockState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockState = {
      range: [],
      channelSet: '',
      originalRange: [],
    };
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  describe('range is defined', () => {
    beforeEach(() => { mockState.range = [0, 86]; });

    it('should render correctly', () => {
      wrapper.setState(mockState);
      expect(wrapper.update()).toMatchSnapshot();
    });
  });
  describe('originalRange is defined', () => {
    beforeEach(() => { mockState.originalRange = [0, 86]; });

    it('should render correctly', () => {
      wrapper.setState(mockState);
      expect(wrapper.update()).toMatchSnapshot();
    });
  });
});
