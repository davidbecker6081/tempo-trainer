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
      range: [0, 85],
      channelSet: '',
      originalRange: [0, 86],
    };
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
