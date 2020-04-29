import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const ListItem = ({ _id, name }) => (
  <>
    <p>{name}</p>
    <p>{_id}</p>
  </>
);

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ListItem;

