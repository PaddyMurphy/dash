export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      console.log('SIMPLE_ACTION', action.payload);
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
