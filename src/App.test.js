import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import MessageItem from './MessageItem';

it('renders without crashing', () => {
  shallow(<App />);
});

it ('renders MessageItem without crashing',  () => {
  shallow(<MessageItem message={"Test"} />);
})

it('Gets props from Message Item:', () => {
  // Arrange
  const message = "Test";

  // Act
  const wrapper = mount(<MessageItem message={"Test"} />);
  const props = wrapper.props();

  // Assert
  expect(props.message).toBe(message);
});
