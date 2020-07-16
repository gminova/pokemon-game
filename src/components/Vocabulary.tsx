import React, { useState } from 'react';
import {
  getScore,
  setScore,
  increaseScore,
  getPokemonUser,
  generateRandomInteger,
} from '../utils/functions';
import { gradeOne } from '../data/kanji';
import { Button } from './Button';

export const Vocabulary = () => {
  const randomInteger = generateRandomInteger(1, 807);
  const guestUser = JSON.stringify({
    userName: 'Guest',
    score: 0,
    userPokemons: [],
  });

  const [dynamicStorage, setDynamicStorage] = useState(
    JSON.parse(localStorage.getItem('pokemonUser') || guestUser)
  );

  if (localStorage.getItem('pokemonUser') === null) {
    localStorage.setItem('pokemonUser', guestUser);
    setDynamicStorage(getPokemonUser());
  }

  const handleCorrectAnswer = () => {
    setScore(increaseScore(getScore()));
    setDynamicStorage(getPokemonUser());
  };

  const listAnswers = gradeOne[0].readings.map((question, i) => (
    <li
      key={i}
      onClick={() =>
        question.type ? handleCorrectAnswer() : alert(question.type)
      }
    >
      <button>{question.text}</button>
    </li>
  ));

  return (
    <>
      <ul>
        <li>User name: {dynamicStorage.userName}</li>
        <li>Score: {dynamicStorage.score}</li>
        <li>Pokemons:{dynamicStorage.userPokemons.length}</li>
      </ul>

      <p>正しい読み方を選んでください</p>
      <p>{gradeOne[0].kanji}</p>
      <ol>{listAnswers}</ol>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomInteger}.png`}
        alt="pokemon"
      />
      <Button />
    </>
  );
};
