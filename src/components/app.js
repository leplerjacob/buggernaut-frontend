import React, { useEffect } from "react";
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
      <h1>Buggernaut | Project Management</h1>

    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { checkIfLoggedIn })(
  App
);