import React, { useState } from 'react';
import { generateRandomInteger } from '../utils/functions';

const defaultUrl = 'https://pokeapi.co/static/pokeapi_256.888baca4.png';

const pokeImgUrl = `https://pokeapi.co/api/v2/pokemon/${generateRandomInteger(
  1,
  100
)}`;

export const Button = () => {
  const [imgUrl, setImgUrl] = useState(defaultUrl);

  return (
    <>
      <button
        onClick={() =>
          fetch(pokeImgUrl).then((res) =>
            res
              .json()
              .then((json) =>
                localStorage.setItem(
                  'pokemon',
                  JSON.stringify(json.sprites.front_default)
                )
              )
              .then(() =>
                setImgUrl(
                  JSON.parse(localStorage.getItem('pokemon') || defaultUrl)
                )
              )
          )
        }
      >
        Click me!
      </button>
      <img src={imgUrl} />
    </>
  );
};
