const initialState = {
  loggedInStatus: false,
  user: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user, logged_in, status } = action.user;
      if (status !== 401) {
        return {
          ...state,
          loggedInStatus: logged_in,
          user: user,
        };
      }
      if (status === 401) {
        return {
          ...state,
          loggedInStatus: logged_in,
          user: "",
        };
      }

    default:
      return state;
  }
};