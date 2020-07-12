import React from 'react';
import { Dashboard } from './Dashboard';
import { Question } from './Question';
import { generateRandomInteger } from '../utils/functions';
import { gradeOne } from '../data/kanji';

export const Vocabulary = () => {
  const randomInteger = generateRandomInteger(1, 807);

  return (
    <>
      <Dashboard />
      <Question {...gradeOne[0]} />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomInteger}.png`}
        alt="pokemon"
      />
    </>
  );
};
