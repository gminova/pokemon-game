import React from 'react';
import { UserProfile } from './UserProfile';
import { WelcomeBack } from './WelcomeBack';

export const Home = () => {
  const loggedIn = localStorage.getItem('pokemonUser');

  return (
    <>{(loggedIn && <WelcomeBack />) || <UserProfile text="Some text" />}</>
  );
};
