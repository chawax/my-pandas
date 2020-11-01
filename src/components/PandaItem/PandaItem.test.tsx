import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import PandaItem from './PandaItem';

afterEach(cleanup);

it('renders panda name', () => {
  render(<PandaItem name="Panda 1" onPress={jest.fn()} />);
  expect(screen.getByText('Panda 1')).toBeInTheDocument();
});

it('onPress event is fired', () => {
  const handlePress = jest.fn();
  render(<PandaItem name="Panda 1" onPress={handlePress} />);
  //screen.debug();
  //screen.getByRole('');
  fireEvent.click(screen.getByRole('listitem'));
  expect(handlePress).toHaveBeenCalledTimes(1);
});
