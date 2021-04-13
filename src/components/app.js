import React, { Component } from "react";
import { login, logout, checkIfLoggedIn } from "../actions/auth";
import { connect, useDispatch } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.checkUserIsLoggedIn = this.checkUserIsLoggedIn.bind(this)
  }

  componentDidMount() {
    let res = this.checkUserIsLoggedIn()

    setTimeout(() => {

    }, 10000)
  }

  checkUserIsLoggedIn = () => {
    return this.props.checkIfLoggedIn()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.loginUser();
  }

  loginUser = async () => {
    const { username, password } = this.state;
    await this.props.login(username, password, password);
  };

  logoutUser = async () => {
    await this.props.logout();
  };

  render() {
    return (
      <div className="app">
        <h1>Buggernaut | Project Management</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { login, logout, checkIfLoggedIn })(App);
