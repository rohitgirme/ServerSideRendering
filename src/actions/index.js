import fetch from 'isomorphic-fetch';

const ROOT_URL = 'http://localhost:3000';

export const CARS_SUCCESS = 'CARS_SUCCESS';

export function fetchCars() {
  console.log("action fetching cars");
  let request = fetch(`${ROOT_URL}/cars`);

  return function (dispatch) {
    return request.then((response) => {
      response.json().then(function (data) {
        dispatch(carsFetched(data));
      });
    });
  };
}

function carsFetched (posts) {
  return {
    type: CARS_SUCCESS,
    payload: posts
  }
}
