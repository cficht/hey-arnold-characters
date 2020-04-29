import React, { useState, useEffect } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import { fetchCharacters } from '../../services/heyarnold';
import { useParams } from 'react-router-dom';

const CharacerList = () => {
  const [characters, setCharacters] = useState([]);
  let { page } = useParams();
  if(!page) page = 1;

  useEffect(() => {
    fetchCharacters(page)
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
