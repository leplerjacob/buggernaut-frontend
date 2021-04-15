import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./OverviewComponent";
import NewProjects from "./projects/NewProject";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: "#F7F8FC",
    padding: 30,
  },
});

class App extends React.Component {
  state = { selectedItem: "Overview" };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componenWillMount() {
    window.removeEventListenever("resize", this.resize);
  }

  resize = () => this.forceUpdate();

  renderSwitch = (selectedItem) => {
    switch (selectedItem) {
      case "Overview":
        return <OverviewComponent />;
      case "Projects":
        return <NewProjects />;
      default:
        break;
    }
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>
            {this.renderSwitch(selectedItem)}
          </div>
        </Column>
      </Row>
    );
  }
}

export default App;
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
