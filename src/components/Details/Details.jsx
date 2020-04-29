import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, image }) => (
  <>
    <p>{name}</p>
    <img src={image} />
  </>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Details;

