import { fail } from 'assert';
import axios from 'axios';
import sinon, { SinonSandbox } from 'sinon';
import api from './api';

describe('loadPandas', () => {
  let sandbox: SinonSandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  test('success', async () => {
    const pandas = ['panda1', 'panda2', 'panda3'];
    const resolved = { data: pandas };
    sandbox.stub(axios, 'get').resolves(resolved);
    const result = await api.loadPandas();
    expect(result).toEqual(pandas);
  });

  test('failure', async () => {
    const rejected = { error: { response: { status: 404 } } };
    sandbox.stub(axios, 'get').rejects(rejected);
    try {
      await api.loadPandas();
      fail();
    } catch (error) {
      expect(error).toEqual(rejected);
    }
  });
});
