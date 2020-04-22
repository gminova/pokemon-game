import React from 'react';
import logo from './svgs/logo.svg';
import * as S from './App.styled';

export const App = () => (
  <S.Container>
    <S.Logo src={logo} alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <S.Link
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </S.Link>
  </S.Container>
);
