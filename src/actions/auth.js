import axios from "axios";

export const login = (username, password, password_confirmation) => {
  return async (dispatch) => {

    const reqObj = {
        user: {
          username: username,
          password: password,
          password_confirmation: password,
        },
      };

    const res = await axios.post("http://localhost:3000/sessions", reqObj, {
      withCredentials: true,
    });

    dispatch({ type: "LOGIN", user: res.data });
  };
};
