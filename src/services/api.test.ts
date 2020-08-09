import { fail } from 'assert';
import axios from 'axios';
import api from './api';

describe('loadPandas', () => {
  let mockGetAxios: jest.SpyInstance<any>;
  beforeEach(() => {
    mockGetAxios = jest.spyOn(axios, 'get');
  });

  test('success', async () => {
    const pandas = ['panda1', 'panda2', 'panda3'];
    const resolved = { data: pandas };
    mockGetAxios.mockResolvedValueOnce(resolved);
    const result = await api.loadPandas();
    expect(result).toEqual(pandas);
  });

  test('failure', async () => {
    const rejected = { error: { response: { status: 404 } } };
    mockGetAxios.mockRejectedValueOnce(rejected);
    try {
      await api.loadPandas();
      fail();
    } catch (error) {
      expect(error).toEqual(rejected);
    }
  });
});
