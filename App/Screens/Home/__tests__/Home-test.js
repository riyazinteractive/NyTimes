// __tests__/Home-test.js
import React from 'react';
import HomeScreen from '../HomeScreen';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureMockStore(middlewares);

const initialState = { 
  loading: false,
  data: null,
  news: null,
  error: ''
}
const store = mockStore(initialState);
test('renders HomeScreen correctly', () => {
  const wrapper = shallow (<Provider store={store}><HomeScreen /></Provider>)
  expect(wrapper.dive()).toMatchSnapshot()
});