import { push } from 'connected-react-router';
import { Action } from 'redux';
import { runSaga } from 'redux-saga';
import sinon, { SinonSandbox, SinonStub } from 'sinon';
import slice from '../redux/pandas';
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

  let sandbox: SinonSandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  it('api call was successful', async () => {
    // Mock de l'API

    const apiStub: SinonStub = sandbox.stub(api, 'loadPandas').resolves(pandas);

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };
    await runSaga(sagaConfig, loadPandas, api, action);

    // Contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasSuccess(pandas)]);

    // Contrôle des appels d'API

    expect(apiStub.calledOnce).toBeTruthy();
  });

  it('api call failed', async () => {
    // Mock de l'API

    const error = new Error('Error for test');
    const apiStub: SinonStub = sandbox.stub(api, 'loadPandas').rejects(error);

    // Configuration et exécution de la saga

    const state = {};
    const action = loadPandasRequest();
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };
    await runSaga(sagaConfig, loadPandas, api, action);

    // contrôle des actions dispatchées

    expect(dispatched).toEqual([loadPandasFailure(error)]);

    // Contrôle des appels d'API

    expect(apiStub.calledOnce).toBeTruthy();
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

  let sandbox: SinonSandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  it('api call was successful', async () => {
    // Mock de l'API

    const createdPanda: Panda = {
      ...newPanda,
      key: 'key',
    };
    const apiStub = sandbox.stub(api, 'createPanda').resolves(createdPanda);

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
    await runSaga(sagaConfig, createPanda, api, action);

    // Contrôle des actions dispatchées

    expect(dispatched).toEqual([
      createPandaSuccess(createdPanda), //
      push('/hooks/pandas'),
    ]);

    // Contrôle des appels d'API

    expect(apiStub.calledOnce).toBeTruthy();
  });

  it('api call failed', async () => {
    // Mock de l'API

    const error = new Error('Error for test');
    const apiStub: SinonStub = sandbox.stub(api, 'createPanda').rejects(error);

    // Configuration et exécution de la saga

    const state = {};
    const action = createPandaRequest(newPanda);
    const dispatched: Action[] = [];
    const sagaConfig = {
      dispatch: (a: Action) => dispatched.push(a),
      getState: () => state,
    };
    await runSaga(sagaConfig, createPanda, api, action);

    // contrôle des actions dispatchées

    expect(dispatched).toEqual([createPandaFailure(error)]);

    // Contrôle des appels d'API

    expect(apiStub.calledOnce).toBeTruthy();
  });
});
