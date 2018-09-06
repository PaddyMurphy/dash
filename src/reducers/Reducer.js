import {data} from 'reducers/mockData';

const INITIAL_STATE = {
  deals: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      console.log('SIMPLE_ACTION', action.payload);
      return {
        ...state,
        result: action.payload,
      };

    case 'FETCH_DEALS':
      console.log('FETCH_DEALS', data.deals);
      return {
        ...state,
        deals: data.deals,
      };
    default:
      return state;
  }
};
