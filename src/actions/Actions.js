import * as types from 'actions/types';

export const simpleAction = () => dispatch => {
  dispatch({
    type: types.SIMPLE_ACTION,
    payload: {results: true},
  });
};

export const fetchDeals = () => dispatch => {
  dispatch({
    type: types.FETCH_DEALS,
    payload: {notUndefined: true},
  });
};
