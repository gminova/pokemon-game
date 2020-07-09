import React, { useState } from 'react';

interface Props {
  text: string;
}
export const TextField: React.FC<Props> = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Enter your name</h1>
      <input onChange={e => setInput(e.target.value)} />
      <h2>{input}</h2>
    </div>
  );
};