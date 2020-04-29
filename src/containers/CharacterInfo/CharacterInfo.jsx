import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchCharacter } from '../../services/heyarnold';
import { useParams } from 'react-router-dom';

const CharacterInfo = () => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchCharacter(id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Details {...character} />
    </>
  );
};

export default CharacterInfo;
