import React from 'react';

type Readings = {
  text: string;
  type: boolean;
};

type QuestionProps = {
  kanji: string;
  readings: Array<Readings>;
};

export const Question = ({ kanji, readings }: QuestionProps) => {
  return (
    <>
      <p>正しい読み方を選んでください</p>
      <p>{kanji}</p>
      {readings.map(({ text }, i) => (
        <button key={i}>{text}</button>
      ))}
    </>
  );
};
