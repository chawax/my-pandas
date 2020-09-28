import { fail } from 'assert';
import axios from 'axios';
import api from './api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loadPandas', () => {
  test('success', async () => {
    const pandas = ['panda1', 'panda2', 'panda3'];
    const resolved = { data: pandas };
    mockedAxios.get.mockResolvedValue(resolved);
    const result = await api.loadPandas();
    expect(result).toEqual(pandas);
  });

  test('failure', async () => {
    const rejected = { error: { response: { status: 404 } } };
    mockedAxios.get.mockRejectedValue(rejected);
    try {
      await api.loadPandas();
      fail();
    } catch (error) {
      expect(error).toEqual(rejected);
    }
  });
});
