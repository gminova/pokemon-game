export const generateRandomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const increaseScore = (score: number) => score + 1;

export const getScore = () =>
  JSON.parse(localStorage.getItem('pokemonUser') || '').score;

export const getPokemonUser = () =>
  JSON.parse(localStorage.getItem('pokemonUser') || '');

export const setScore = (score: number) => {
  const user = getPokemonUser();
  user.score = score;
  localStorage.setItem('pokemonUser', JSON.stringify(user));
};
