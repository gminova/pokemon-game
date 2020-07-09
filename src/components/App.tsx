import React from 'react';
import * as S from './App.styled';
import { TextField } from './TextField';

export const App: React.FC = () => (
  <S.Container>
    <TextField text="Some text" />
  </S.Container>
);
