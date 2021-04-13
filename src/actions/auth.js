import axios from "axios";

export const checkIfLoggedIn = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/logged_in", {
      withCredentials: true,
    });

    dispatch({ type: "LOGIN", user: res.data });
  };
};

export const login = (username, password, password_confirmation) => {
  return async (dispatch) => {
    const reqObj = {
      user: {
        username: username,
        password: password,
        password_confirmation: password_confirmation,
      },
    };

    const res = await axios.post("http://localhost:3000/sessions", reqObj, {
      withCredentials: true,
    });
    const data = res.data;

    dispatch({ type: "LOGIN", user: data });
  };
};

export const logout = () => {
  return async (dispatch) => {
    const res = axios.delete("http://localhost:3000/logout");

    console.log("logged out...");
  };
};
