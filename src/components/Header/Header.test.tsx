import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

import '../../i18n';

afterEach(cleanup);

it('renders panda name', async () => {
  render(<Header />);
  //screen.debug();
  expect(screen.getByText('Mes pandas')).toBeInTheDocument();
  expect(screen.getByText(/EN/)).toBeInTheDocument();
  expect(screen.getByText(/FR/)).toBeInTheDocument();

  screen.debug();

  // FIXME Tester le changement de langue

  //  await waitFor(() => userEvent.click(screen.getByText(/EN/)));

  //expect(screen.findByText('Mes pandas')).not.toBeInTheDocument();
  //expect(screen.getByText('My pandas')).toBeInTheDocument();
});
