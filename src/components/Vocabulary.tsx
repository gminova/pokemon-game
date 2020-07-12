import React from 'react';
import { Dashboard } from './Dashboard';
import { generateRandomInteger } from '../utils/functions';

export const Vocabulary = () => {
  return (
    <>
      <Dashboard />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${generateRandomInteger(
          1,
          807
        )}.png`}
        alt="pokemon"
      />
    </>
  );
};
