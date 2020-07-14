import {
  generateRandomInteger,
  increaseScore,
  getScore,
  setScore,
} from './functions';

describe('generateRandomInteger util', () => {
  const min = 1;
  const max = 807;

  it('generates a random integer between 1 and 807', () => {
    expect(generateRandomInteger(min, max)).toBeGreaterThanOrEqual(min);
    expect(generateRandomInteger(min, max)).toBeLessThanOrEqual(max);
  });
});

describe('increaseScore util', () => {
  it('increases score by 1', () => {
    expect(increaseScore(0)).toEqual(1);
  });
});

describe('getScore util', () => {
  const dummyUser = JSON.stringify({
    userName: 'Ash',
    score: 5,
    userPokemons: [],
  });

  it('retrieves score from local storage', () => {
    window.localStorage.setItem('pokemonUser', dummyUser);
    expect(getScore()).toEqual(5);
    window.localStorage.removeItem('pokemonUser');
  });
});

describe('setScore util', () => {
  const dummyUser = JSON.stringify({
    userName: 'Ash',
    score: 5,
    userPokemons: [],
  });

  it('sets score in local storage', () => {
    window.localStorage.setItem('pokemonUser', dummyUser);
    setScore(10);
    expect(
      JSON.parse(window.localStorage.getItem('pokemonUser') || '').score
    ).toEqual(10);
    window.localStorage.removeItem('pokemonUser');
  });
});
