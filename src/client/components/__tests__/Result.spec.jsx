import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Result';

describe('Result component', () => {  
  test(`should render default text`, () => {
    const wrapperDefault = shallow(<Result />);
    expect(wrapperDefault.find('.final_res').text()).toBe('Median Primes will dispaly here!');
  });

  test(`should render Median Primes array`, () => {
    const wrapperDefault = shallow(<Result num={'10'} medianPrimes={[3,5]}/>);
    expect(wrapperDefault.find('.final_res').text()).toBe('Median Primes under 10 : 3,5');
  })
})