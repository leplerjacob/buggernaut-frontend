const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
