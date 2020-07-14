import React from 'react';
import { getScore, increaseScore, setScore } from '../utils/functions';

type Readings = {
  text: string;
  type: boolean;
};

type QuestionProps = {
  kanji: string;
  readings: Array<Readings>;
};

export const Question = ({ kanji, readings }: QuestionProps) => {
  const listAnswers = readings.map(({ text, type }, i) => (
    <li
      key={i}
      onClick={() => (type ? setScore(increaseScore(getScore())) : alert(type))}
    >
      <button>{text}</button>
    </li>
  ));

  return (
    <>
      <p>正しい読み方を選んでください</p>
      <p>{kanji}</p>
      <ol>{listAnswers}</ol>
    </>
  );
};
