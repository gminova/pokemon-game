import React, { useState } from 'react';
import { fetchData } from '../api/api';

const defaultUrl =
  'https://cdn.shopify.com/s/files/1/1756/9559/products/pokeball_coaster_photo_33c69500-8564-4842-a2a7-3803975a2d3b_1024x1024.jpg?v=1557064432';

export const Button = () => {
  const [imgUrl, setImgUrl] = useState(defaultUrl);

  return (
    <>
      <button
        onClick={() =>
          fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) =>
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
