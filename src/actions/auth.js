import axios from "axios";

export const checkIfLoggedIn = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/logged_in", {
      withCredentials: true,
    });
    const data = await res.data;
    dispatch({ type: "CHECK_LOGGED_IN", check: data });
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    const reqObj = {
      user: {
        username: username,
        password: password,
      },
    };

    const res = await axios.post("http://localhost:3000/sessions", reqObj, {
      withCredentials: true,
    });

    const data = await res.data;

    dispatch({ type: "LOGIN", user: data });
  };
};

export const logout = () => {
  return async (dispatch) => {
    const res = await axios.delete("http://localhost:3000/logout");

    dispatch({type: "LOGOUT", user: res.data})
  };
};
