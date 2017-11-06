import React from 'react';
import { CarPreview } from './CarPreview';

export const IndexPage = (props) => (
  <div className="home">
    <div className="cars-selector">
      {props.cars.map(
        carData => <CarPreview key={carData.id} {...carData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
