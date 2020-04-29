import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Details = ({ name, image }) => (
  <>
    <p>{name}</p>
    <img src={image} />
  </>
);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Details;

