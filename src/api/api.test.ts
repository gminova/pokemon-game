import { fetchData } from './api';

describe('fetchData util', () => {
  const globalAny: any = global;

  it('calls fetch with given url', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    const url = 'mock url';

    jest.spyOn(globalAny, 'fetch').mockImplementation(() => mockFetchPromise);
    fetchData(url);

    expect(globalAny.fetch).toHaveBeenCalledTimes(1);
    expect(globalAny.fetch).toHaveBeenCalledWith(url);
  });
});
