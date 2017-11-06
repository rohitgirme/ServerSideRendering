/**
 * Created by rohitgirme on 7/29/17.
 */
import { CarPage } from '../components/CarPage';
import { NotFoundPage } from '../components/NotFoundPage';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCars} from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const car = state.cars.find(current => current.id === id);
  return {
    cars: state.cars,
    car: car
  };
}

class Wrapper extends Component {

  static fetchData(store) {
    const action = fetchCars();
    return action(store.dispatch);
  }

  componentDidMount() {
    if (!this.props.cars) {
      this.props.fetchCars();
    }
  }

  render() {
    if (!this.props.car) {
      // return <NotFoundPage staticContext={staticContext} />;
      return <NotFoundPage />;
    }

    return <CarPage car={this.props.car} cars={this.props.cars} />;
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCars}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

