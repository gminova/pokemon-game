export const fetchPokemon = (
  url: string,
  setState: any,
  defaultState: string
) =>
  fetch(url).then((res) =>
    res
      .json()
      .then((json) => localStorage.setItem('pokemon', JSON.stringify(json)))
      .then(() =>
        setState(JSON.parse(localStorage.getItem('pokemon') || defaultState))
      )
  );
