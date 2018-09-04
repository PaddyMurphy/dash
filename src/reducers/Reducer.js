import {data} from 'reducers/mockData';

export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      console.log('SIMPLE_ACTION', action.payload);
      return {
        result: action.payload,
      };

    case 'FETCH_DEALS':
      console.log('FETCH_DEALS');
      return {
        result: data.deals,
      };
    default:
      return state;
  }
};
