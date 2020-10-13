import '@testing-library/jest-dom/extend-expect';
import { findAllByRole, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { pandas } from '../../mocks/data.json';
import { server } from '../../mocks/server';
import { store } from '../../redux';
import PandasListPage from './PandasListPage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PandasListPage', () => {
  describe('with Axios mock', () => {
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

      const loadingElement = await getByText(/Loading.../i);
      expect(loadingElement).toBeInTheDocument();

      // We wait for API to have been called

      await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

      // We should display a list of 10 pandas

      const listItems = await findAllByRole(container, 'listitem');
      expect(listItems.length).toBe(10);

      // We should display Yuan Meng panda

      const yuanMeng = getByRole('heading', { name: 'Yuan Meng' });
      expect(yuanMeng).toBeInTheDocument();
      expect(loadingElement).not.toBeInTheDocument();
    });
  });

  describe('with Mock Service Worker', () => {
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());

    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());

    // Clean up after the tests are finished.
    afterAll(() => server.close());

    it('should render a loading component then a list of pandas', async () => {
      // Render the component

      const { getByText, getByRole, container } = render(
        <Provider store={store}>
          <PandasListPage />
        </Provider>,
      );

      // We should display a loading component

      const loadingElement = await getByText(/Loading.../i);
      expect(loadingElement).toBeInTheDocument();

      // After API was called we should display a list of 10 pandas

      await waitForElementToBeRemoved(() => getByText(/Loading.../));

      const listItems = await findAllByRole(container, 'listitem');
      expect(listItems.length).toBe(10);

      // We should display Yuan Meng panda

      const yuanMeng = getByRole('heading', { name: 'Yuan Meng' });
      expect(yuanMeng).toBeInTheDocument();
      expect(loadingElement).not.toBeInTheDocument();
    });
  });
});
