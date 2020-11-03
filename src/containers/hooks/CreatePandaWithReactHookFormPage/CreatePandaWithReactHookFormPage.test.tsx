import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import '../../../i18n';
import { store } from '../../../redux';
import CreatePandaWithReactHookFormPage from './CreatePandaWithReactHookFormPage';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CreatePandaWithReactHookFormPage', () => {
  describe('with Axios mock', () => {
    afterEach(() => {
      // On fait un reset pour que les compteurs d'appel soient remis à zéro
      mockedAxios.post.mockReset();
    });

    it('should create a new panda', async () => {
      // Mock de l'API

      mockedAxios.post.mockResolvedValue({});

      // On rend le composant
      // Il est encapsulé dans un provider Redux

      const { getByPlaceholderText, getByRole } = render(
        <Provider store={store}>
          <CreatePandaWithReactHookFormPage />
        </Provider>,
      );

      // On vérifie la présence des différents champs de saisie

      const nameInput = getByPlaceholderText(/Saisissez le nom du panda/);
      expect(nameInput).toBeInTheDocument();

      const interestInput = getByPlaceholderText(/Saisissez les centres d'intérêt/);
      expect(interestInput).toBeInTheDocument();

      const imageInput = getByPlaceholderText(/Saisissez l'url de l'image/);
      expect(imageInput).toBeInTheDocument();

      // On vérifie la présence des boutons

      const validateButton = getByRole('button', { name: 'Valider' });
      expect(validateButton).toBeInTheDocument();

      const cancelButton = getByRole('button', { name: 'Annuler' });
      expect(cancelButton).toBeInTheDocument();

      // On simule une saisie dans les champs et une validation du formulaire

      await waitFor(() => userEvent.type(nameInput, 'Olivier'));
      await waitFor(() => userEvent.type(interestInput, 'football,photo'));
      await waitFor(() => userEvent.type(imageInput, 'photo.jpg'));
      await waitFor(() => userEvent.click(validateButton));

      //screen.debug();

      // Contrôle des appels à Axios

      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3004/pandas', {
        image: 'photo.jpg',
        interests: ['football', 'photo'],
        name: 'Olivier',
      });
    });
  });
});
