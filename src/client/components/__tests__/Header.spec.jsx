import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  const wrapperDefault = shallow(<Header />);
  test(`should render TouchBistro Full Stack Challenge text`, () => {
    expect(wrapperDefault.find('h2').length).toBe(1);
    expect(wrapperDefault.find('h2').text()).toBe('TouchBistro Full Stack Challenge');
  })
})