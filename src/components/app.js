import React, { useState, useEffect } from "react";
import { login, logout, checkIfLoggedIn } from "../actions/auth";
import { connect } from "react-redux";

function App(props) {
  const [state, setState] = useState({ username: "", password: "" });

  useEffect(() => {
    checkLogin()
  }, []);

  // Handles
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  const checkLogin = () => {
    return props.checkIfLoggedIn();
  };

  const loginUser = () => {
    const { username, password } = state;
    props.login(username, password, password);
  };

  const logoutUser = () => {
    props.logout();
  };

  return (
    <div className="app">
      <h1>Buggernaut | Project Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { login, logout, checkIfLoggedIn })(
  App
);
