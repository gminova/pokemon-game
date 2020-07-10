import React from 'react';
import * as S from './App.styled';
import { TextField } from './TextField';
import { Button } from './Button';

export const App: React.FC = () => (
  <S.Container>
    <TextField text="Some text" />

    {/* <Button /> */}
  </S.Container>
);
