/**
 * Created by rohitgirme on 3/12/17.
 */
import React, {Component} from 'react';
import IndexPage from '../components/IndexPage';
import { connect } from 'react-redux';
import {fetchCars} from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

class Wrapper extends Component {

  static fetchData(store) {
    const action = fetchCars();
    return action(store.dispatch);
  }

  componentDidMount() {
    if (this.props.cars.length === 0) {
      this.props.fetchCars();
    }
  }

  render() {
    return <IndexPage cars={this.props.cars}/>;
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCars}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
// export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
