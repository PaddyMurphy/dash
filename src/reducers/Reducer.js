export default (state = {}, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
