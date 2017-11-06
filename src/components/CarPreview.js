import React from 'react';
import { Link } from 'react-router-dom';

export const CarPreview = props => (
  <Link to={`/car/${props.id}`}>
    <div className="car-preview">
      <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default CarPreview;
