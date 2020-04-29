import React, { useState, useEffect } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import { fetchCharacters } from '../../services/heyarnold';

const CharacerList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(apiCharacters => setCharacters(apiCharacters));
  }, []);

  const characterNodes = characters.map(character => {
    return <ListItem key={character._id} {...character} />;
  });
  
  return (
    <>
      {characterNodes}
    </>
  );
};

export default CharacerList;
