import { generateRandomInteger } from './functions';

describe('generateRandomInteger util', () => {
  const min = 1;
  const max = 807;

  it('generates a random integer between 1 and 807', () => {
    expect(generateRandomInteger(min, max)).toBeGreaterThanOrEqual(min);
    expect(generateRandomInteger(min, max)).toBeLessThanOrEqual(max);
  });
});
