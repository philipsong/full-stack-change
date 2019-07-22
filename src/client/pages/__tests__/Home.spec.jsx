global.fetch = require('jest-fetch-mock');
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../Home';

describe('Result component', () => { 
  beforeEach(() => {
    fetch.resetMocks();
  }); 

  test(`should render default component`, () => {
    const wrapperDefault = mount(<Home />);
    expect(wrapperDefault.find('label').text()).toBe('Please Input Upper Limit n:');
    expect(wrapperDefault.find('button').props().disabled).toBe(true);
  });

  test('input onchange event', () => {
    const wrapperDefault = mount(<Home />);
    wrapperDefault.find('input').simulate('change', {
      target: {value: '18'}
    })
    expect(wrapperDefault.find('button').props().disabled).toBe(false);
  
    wrapperDefault.find('input').simulate('change', {
      target: {value: ''}
    })
    expect(wrapperDefault.find('button').props().disabled).toBe(true);
  });

  test('input onclick event', () => {
    const wrapperDefault = mount(<Home />);
    wrapperDefault.find('input').simulate('change', {
      target: {value: '18'}
    })
    expect(wrapperDefault.find('button').props().disabled).toBe(false);
  
    wrapperDefault.find('input').simulate('change', {
      target: {value: ''}
    })
    expect(wrapperDefault.find('button').props().disabled).toBe(true);
  });

  test('smiluate user input correct num in submit', () => {
    const apiRes = {
      status: {
        statusCd: '200'
      },
      data: [3,5]
    };
    fetch.mockResponse(JSON.stringify(apiRes));
    const wrapperDefault = mount(<Home />);
    wrapperDefault.find('input').simulate('change', {
      target: {value: '10'}
    });
    wrapperDefault.find('button').simulate('click');
    setTimeout(() => {
      wrapperDefault.update();
      expect(wrapperDefault.find('.final_res').text()).toBe('Median Primes under 10 : 3,5');
    }, 100);
  });

  test('smiluate user input wrong num in submit', () => {
    const apiRes = {
      status: {
        statusCd: '400',
        statusTxt: 'wrong input'
      }
    };
    fetch.mockResponse(JSON.stringify(apiRes));
    const wrapperDefault = mount(<Home />);
    wrapperDefault.find('input').simulate('change', {
      target: {value: '-100'}
    });
    wrapperDefault.find('button').simulate('click');
    setTimeout(() => {
      wrapperDefault.update();
      expect(wrapperDefault.find('.final_res').text()).toBe('Median Primes under -100 : wrong input');
    }, 100);
  })
})