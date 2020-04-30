export const fetchCharacters = (page) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => res.json());
};

export const fetchCharacter = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
