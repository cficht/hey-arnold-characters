import React, { useState, useEffect } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import { fetchCharacters } from '../../services/heyarnold';
import { useParams, useHistory } from 'react-router-dom';

const CharacerList = () => {
  const [characters, setCharacters] = useState([]);
  let { page } = useParams();
  let history = useHistory();

  if(!page) page = 1;

  useEffect(() => {
    fetchCharacters(page)
      .then(apiCharacters => setCharacters(apiCharacters));
  }, [page]);

  const nextPage = () => {
    const newNum = Number(page) + Number(event.target.value);  
    if(newNum > 0) {
      page = newNum;
      history.push(`/${page}`);
    }
  };

  const characterNodes = characters.map(character => {
    return <ListItem key={character._id} {...character} />;
  });
  
  return (
    <>
      {characterNodes}
      <button value={-1} onClick={nextPage}>Back</button>
      <button value={1} onClick={nextPage}>Forward</button>
    </>
  );
};

export default CharacerList;
