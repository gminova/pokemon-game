import React from 'react';
import { fetchData } from '../api/api';

export const Button = () => {
  return (
    <button
      onClick={() =>
        fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) =>
          res
            .json()
            .then((json) =>
              localStorage.setItem('pokemon', JSON.stringify(json))
            )
        )
      }
    >
      Click me!
    </button>
  );
};
