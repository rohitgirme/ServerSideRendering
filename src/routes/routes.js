/**
 * Created by rohitgirme on 8/9/17.
 */
import CarsIndexContainer from './containers/CarsIndexContainer';
import CarHOC from './containers/CarHOC';

const routes = [
  {"path": "/", "component": CarsIndexContainer},
  {"path": "/car/:id", "component": CarHOC}
];

export default routes;


