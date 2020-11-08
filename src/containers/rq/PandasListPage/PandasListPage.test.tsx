import '@testing-library/jest-dom/extend-expect';
import { findAllByRole, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import '../../../i18n';
import { pandas } from '../../../mocks/data.json';
import PandasListPage from './PandasListPage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PandasListPage', () => {
  describe('with Axios mock', () => {
    afterEach(() => {
      mockedAxios.get.mockReset();
    });

    it('should render a loading component then a list of pandas', async () => {
      // Mock API

      mockedAxios.get.mockResolvedValue({ data: pandas });

      // Render the component

      const { getByText, getByRole, container } = render(<PandasListPage />);

      // We should display a loading component

      const loadingElement = getByText(/Loading.../i);
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

    xit('should display a retry button', async () => {
      // Mock API

      mockedAxios.get.mockRejectedValue({ error: 'Network error' });

      // Render the component

      const { getByText, getByRole } = render(<PandasListPage />);

      // We should display a loading component

      const loadingElement = getByText(/Loading.../i);
      expect(loadingElement).toBeInTheDocument();

      // We wait for API to have been called

      await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));

      // We should display a retry button

      const retryButton = getByRole('button', { name: 'Réessayer' });
      expect(retryButton).toBeInTheDocument();
    });
  });
});
