import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import PandaItem from './PandaItem';

afterEach(cleanup);

it('renders panda infos', () => {
  const interests = ['dormir', 'manger du bambou'];
  render(<PandaItem name="Panda 1" interests={interests} onPress={jest.fn()} />);
  //screen.debug();
  expect(screen.getByText('Panda 1')).toBeInTheDocument();
  expect(screen.getByText('dormir')).toBeInTheDocument();
  expect(screen.getByText('manger du bambou')).toBeInTheDocument();
});

it('onPress event is fired', () => {
  const handlePress = jest.fn();
  render(<PandaItem name="Panda 1" onPress={handlePress} />);
  //screen.debug();
  //screen.getByRole('');
  userEvent.click(screen.getByRole('listitem'));
  expect(handlePress).toHaveBeenCalledTimes(1);
});
