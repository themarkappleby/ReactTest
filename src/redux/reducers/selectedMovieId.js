export default (state = 1, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
    default:
      return state;
  }
};
