import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
}
export const TextField: React.FC<Props> = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Enter your name</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <h2>{input}</h2>
      {input && (
        <Link to="/vocabulary">
          <button
            onClick={() => {
              localStorage.setItem('userName', input);
            }}
          >
            Let's GO!
          </button>
        </Link>
      )}
    </div>
  );
};
