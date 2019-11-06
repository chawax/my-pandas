import { Action } from 'redux';
import { runSaga } from 'redux-saga';
import sinon, { SinonSandbox } from 'sinon';
import { loadPandasFailure, loadPandasRequest, loadPandasSuccess } from '../redux/pandas/actions';
import api from '../services/api';
import { loadPandas } from './pandas';

describe('loadPandas', () => {
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

    const apiStub = sandbox.stub(api, 'loadPandas').resolves(pandas);

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
    const apiStub = sandbox.stub(api, 'loadPandas').rejects(error);

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
