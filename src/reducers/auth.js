const initialState = {
  loggedInStatus: false,
  user: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      let { user, logged_in, status } = action.user;
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
    }
    case "CHECK_LOGGED_IN":
      {
        const {logged_in, user } = action.check
        if (logged_in) {
          return {
            ...state,
            loggedInStatus: logged_in,
            user: user,
          };
        }
        if (!logged_in) {
          return {
            ...state,
            loggedInStatus: logged_in,
            user: "",
          };
        }
      }
      return;
    default:
      return state;
  }
};
