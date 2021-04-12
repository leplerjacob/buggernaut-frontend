const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.user,
      };
    default:
      return state;
  }
}
