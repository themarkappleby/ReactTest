export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIE':
    return action.payload;
  case 'FETCH_MOVIES':
    console.log('test', action);
    return action.payload;
  default:
    return state;
  }
};
