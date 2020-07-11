import React from 'react';

export const Dashboard = () => {
  const guestUser = JSON.stringify({
    userName: 'Guest',
    score: 0,
    userPokemons: [],
  });

  const pokemonUser = () => {
    if (localStorage.getItem('pokemonUser') === null) {
      localStorage.setItem('pokemonUser', guestUser);
      return JSON.parse(guestUser);
    } else {
      //Or guest user added to handle TS null exception
      return JSON.parse(localStorage.getItem('pokemonUser') || guestUser);
    }
  };

  return (
    <div>
      <ul>
        <li>User name: {pokemonUser().userName}</li>
        <li>Score: {pokemonUser().score}</li>
        <li>Pokemons:{pokemonUser().userPokemons.length}</li>
      </ul>
    </div>
  );
};
