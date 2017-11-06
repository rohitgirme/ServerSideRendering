import React from 'react';
import { Link } from 'react-router-dom';
import { CarsMenu } from './CarsMenu';

function getColumns() {
  return [
    {
      Header: "Engine",
      accessor: "engine"
    },
    {
      Header: "Power Output",
      accessor: "power_output"
    },
    {
      Header: "Transmission",
      accessor: "transimission"
    },
    {
      Header: "Curb Weight",
      accessor: "curb_weight"
    },
    {
      Header: "Country",
      accessor: "country"
    }
  ]
}

export const CarPage = (props) => {
  const cars = props.cars;
  const car = props.car;
  const facts = car.facts;

  const headerStyle = { backgroundImage: `url(/img/${car.cover})` };
  return (
    <div className="car-full">
      <CarsMenu cars={cars} />
      <div className="car">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${car.name}'s profile`} src={`/img/${car.image}`} />
          <h2 className="name">{car.name}</h2>
        </div>
        <section className="description">
          Olympic medalist from
          &nbsp;,
          born in {car.birth}
          (Find out more on <a href={car.link}>Wikipedia</a>).
        </section>
        <section className="medals">
          <div className="table-row header">
            <div className="text">Engine</div>
            <div className="text">Power Output</div>
            <div className="text">Transmission</div>
            <div className="text">Curb Weight</div>
            <div className="text">Country</div>
          </div>

          <div className="table-row">
            <div className="text">{facts.engine}</div>
            <div className="text">{facts.power_output}</div>
            <div className="text">{facts.transmission}</div>
            <div className="text">{facts.curb_weight}</div>
            <div className="text">{facts.country}</div>
          </div>
          
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index</Link>
      </div>
    </div>
  );
};

export default CarPage;
