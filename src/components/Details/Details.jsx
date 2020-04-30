import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App/App.css';

const Details = ({ name, image }) => (
  <div className={styles.listDiv}>
    <p>{name}</p>
    <img src={image} />
  </div>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Details;

