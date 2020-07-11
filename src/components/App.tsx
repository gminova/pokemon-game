import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as S from './App.styled';
// import { Button } from './Button';
import { Home } from './Home';
import { Vocabulary } from './Vocabulary';

export const App: React.FC = () => {
  return (
    <S.Container>
      <Router>
        <Switch>
          <Route path="/vocabulary">
            <Vocabulary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <Button /> */}
      </Router>
    </S.Container>
  );
};
