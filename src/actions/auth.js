export const login = (username, password, password_confirmation) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: password_confirmation,
      }),
    });
    const resData = await response.json();
    dispatch({ type: "LOGIN", user: resData });
  };
};
