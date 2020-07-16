import React, { useState } from 'react';
import { generateRandomInteger } from '../utils/functions';
import { fetchPokemon } from '../api/api';

const defaultUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';

const pokeImgUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const Button = () => {
  const [pokemon, setPokemon] = useState({
    sprites: { front_default: defaultUrl },
  });

  return (
    <>
      <button
        onClick={() =>
          fetchPokemon(
            `${pokeImgUrl}${generateRandomInteger(1, 100)}`,
            setPokemon,
            defaultUrl
          )
        }
      >
        Click me!
      </button>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
    </>
  );
};
