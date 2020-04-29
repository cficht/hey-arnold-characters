import React, { useState, useEffect } from 'react';
import ListItem from '../../components/ListItem/ListItem';

const CharacerList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const demoCharacters = 
    [
      {
        _id: '5da237699734fdcb7bef8f51',
        name: 'Arnold Shortman',
        image: 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      },
      {
        _id: '5da237699734fdcb7bef8f53',
        name: 'Grandma Gertie',
        image: 'https://vignette.wikia.nocookie.net/heyarnold/images/7/7b/DB87AC2A-C2C2-4DAB-AECF-B9F7273C746B.png/revision/latest/scale-to-width-down/306?cb=20190816101257'
      },
    ];
    setCharacters(demoCharacters);
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
