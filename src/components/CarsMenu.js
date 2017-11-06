import React from 'react';
import { Route, Link } from 'react-router-dom';

const shortName = (fullname) => {
  const [name, surname] = fullname.split(' ');
  return `${name[0]}. ${surname}`;
};

const CarMenuLink = ({ id, to, label }) => (
  <Route path={`/car/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const CarsMenu = ({ cars }) => (
  <nav className="cars-menu">
    {
      cars.map(car =>
        <CarMenuLink key={car.id} id={car.id} to={`/car/${car.id}`} label={shortName(car.name)} />,
      )
    }
  </nav>
);

export default CarsMenu;
