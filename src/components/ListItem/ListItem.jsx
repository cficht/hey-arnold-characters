import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../App/App.css';

const ListItem = ({ _id, name }) => (
  <li className={styles.listDiv}>
    <Link to={`detail/${_id}`} >{name}</Link>
  </li>
);

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ListItem;

