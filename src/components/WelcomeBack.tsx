import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeBack = () => {
  const logOutAndDeleteData = () => {
    localStorage.removeItem('pokemonUser');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <>
      <h1>
        Welcome Back,{' '}
        {
          JSON.parse(
            localStorage.getItem('pokemonUser') ||
              JSON.stringify({ userName: 'Guest' })
          ).userName
        }
      </h1>
      <Link to="/vocabulary">
        <button>Let's GO!</button>
      </Link>
      <button onClick={() => logOutAndDeleteData()}>
        Log Out & Delete Data
      </button>
    </>
  );
};
