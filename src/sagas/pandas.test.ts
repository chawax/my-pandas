import { push } from 'connected-react-router';
import { Action } from 'redux';
import { runSaga } from 'redux-saga';
import { slice } from '../redux/pandas';
import api from '../services/api';
import { Panda } from '../types/Pandas';
import { createPanda, loadPandas } from './pandas';

describe('loadPandas', () => {
  const {
    actions: { loadPandasRequest, loadPandasSuccess, loadPandasFailure },
  } = slice;

  const pandas = [
    {
      key: '1',
      name: 'Yuan Meng',
      image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
      interests: ['yoga', 'bambou'],
    },
    {
      key: '2',
      name: 'Bernardo',
      image: 'https://media.giphy.com/media/EPcvhM28ER9XW/giphy-downsized.gif',
      interests: ['bambou', 'développement'],
    },
  ];

  // Mock de api.loadPandas

  let mockLoadPandas: jest.SpyInstance<any>;
  beforeEach(() => {
    mockLoadPandas = jest.spyOn(api, 'loadPandas');
  });
  afterEach(() => {
    // On fait un reset pour que les compteurs d'appel soient remis à zéro
    mockLoadPandas.mockReset();
  });

  it('api call was successful', async () => {
    // Mock de l'API

    mockLoadPandas.mockResolvedValueOnce(pandas);

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // FIXME
    // @ts-ignore
    await runSaga(sagaConfig, loadPandas, api, action);

    // Contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasSuccess(pandas)]);

    // Contrôle des appels d'API

    expect(mockLoadPandas).toHaveBeenCalledTimes(1);
  });

  it('api call failed', async () => {
    // Mock de l'API

    const error = new Error('Error for test');
    mockLoadPandas.mockRejectedValueOnce(error);

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // FIXME
    // @ts-ignore
    await runSaga(sagaConfig, loadPandas, api, action);

    // contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasFailure(error)]);

    // Contrôle des appels d'API

    expect(mockLoadPandas).toHaveBeenCalledTimes(1);
  });
});

describe('createPanda', () => {
  const {
    actions: { createPandaRequest, createPandaSuccess, createPandaFailure },
  } = slice;

  const newPanda: Panda = {
    name: 'New panda',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: ['yoga', 'bambou'],
  };

  // Mock de api.createPanda

  let mockCreatePanda: jest.SpyInstance<any>;
  beforeEach(() => {
    mockCreatePanda = jest.spyOn(api, 'createPanda');
  });
  afterEach(() => {
    mockCreatePanda.mockReset();
  });

  it('api call was successful', async () => {
    // Mock de l'API

    const createdPanda: Panda = {
      ...newPanda,
      key: 'key',
    };
    mockCreatePanda.mockResolvedValueOnce(createdPanda);

    // Configuration et exécution de la saga

    const state = {
      router: {
        location: {
          pathname: '/hooks/pandas/',
        },
      },
    };
    const action = createPandaRequest(newPanda);
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // FIXME
    // @ts-ignore
    await runSaga(sagaConfig, createPanda, api, action);

    // Contrôle des actions dispatchées

    expect(dispatched).toEqual([
      createPandaSuccess(createdPanda), //
      push('/hooks/pandas'),
    ]);

    // Contrôle des appels d'API

    expect(mockCreatePanda).toHaveBeenCalledTimes(1);
  });

  it('api call failed', async () => {
    // Mock de l'API

    const error = new Error('Error for test');
    mockCreatePanda.mockRejectedValueOnce(error);

    // Configuration et exécution de la saga

    const state = {};
    const action = createPandaRequest(newPanda);
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };

    // FIXME
    // @ts-ignore
    await runSaga(sagaConfig, createPanda, api, action);

    // contrôle des actions dispatchées

    expect(dispatched).toEqual([createPandaFailure(error)]);

    // Contrôle des appels d'API

    expect(mockCreatePanda).toHaveBeenCalledTimes(1);
  });
});
