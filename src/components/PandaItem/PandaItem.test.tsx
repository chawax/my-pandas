import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import PandaItem from '.';

afterEach(cleanup);

it('onPress event is fired', () => {
  const handlePress = jest.fn();
  render(<PandaItem name="Panda 1" onPress={handlePress} />);
  //screen.debug();
  //screen.getByRole('');
  fireEvent.click(screen.getByRole('listitem'));
  expect(handlePress).toHaveBeenCalledTimes(1);
});
