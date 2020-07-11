import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as S from './App.styled';
import { TextField } from './TextField';
import { Button } from './Button';

export const App: React.FC = () => {
  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <Router>
      <S.Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <TextField text="Some text" />

        {/* <Button /> */}
      </S.Container>
    </Router>
  );
};
