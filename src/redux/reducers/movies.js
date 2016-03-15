export default (state = [], action) => {
  switch (action.type) {
  case 'FETCHED_MOVIES':
    return action.payload;
  default:
    return state;
  }
};
