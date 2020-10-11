import { findAllByRole, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { pandas } from '../../mocks/data.json';
import { store } from '../../redux';
import PandasListPage from './PandasListPage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PandasListPage', () => {
  it('should render a loading component then a list of pandas', async () => {
    // Mock API

    mockedAxios.get.mockResolvedValue({ data: pandas });

    // Render the component

    const { getByText, getByRole, container } = render(
      <Provider store={store}>
        <PandasListPage />
      </Provider>,
    );

    // We should display a loading component

    const loadingElement = getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();

    // After API was called we should display a list of 10 pandas

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

    const listItems = await findAllByRole(container, 'listitem');
    expect(listItems.length).toBe(10);

    // We should display Yuan Meng panda

    const yuanMeng = getByRole('heading', { name: 'Yuan Meng' });
    expect(yuanMeng).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();
  });
});
