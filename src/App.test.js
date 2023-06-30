import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import Home from './components/Home';
import Vis from './components/Vis';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders welcome message', () => {
  const wrapper = shallow(<Vis />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
