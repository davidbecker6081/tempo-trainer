import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      user: {
        name: '',
        userImage: '',
      },
    };
  });

  describe('name is defined', () => {
    beforeEach(() => { mockProps.name = 'David'; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('userImage is defined', () => {
    beforeEach(() => { mockProps.userImage = 'test url'; });
    it('should render correclty', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
