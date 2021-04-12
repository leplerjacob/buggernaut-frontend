import React, { Component } from "react";
import { login } from "../actions/auth";
import {connect, useDispatch} from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchLogin = this.fetchLogin.bind(this);
    
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.fetchLogin()
  }

  fetchLogin = async () => {
    const {username, password} = this.state;
    await this.props.login(username, password, password)
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
  user: state.auth.user
})

export default connect(mapStateToProps,{login})(App)
