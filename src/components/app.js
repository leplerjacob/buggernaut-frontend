import React, { useEffect } from "react";
import Dashboard from './Dashboard'
import Login from './Login'
import { checkIfLoggedIn } from "../actions/auth";
import { connect } from "react-redux";

function App(props) {

  useEffect(() => {
    checkLogin()
  }, []);

  const checkLogin = () => {
    return props.checkIfLoggedIn();
  };

  return (
    <div className="app">
      {props.user ? <Dashboard /> : <Login />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { checkIfLoggedIn })(
  App
);