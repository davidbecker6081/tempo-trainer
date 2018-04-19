import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ShareLinks from './ShareLinks';

describe('ShareLinks', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      display: '',
    };
  });

  it('should render correclty', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
