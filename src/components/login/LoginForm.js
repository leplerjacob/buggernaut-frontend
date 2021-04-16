import React, {useState} from "react";
import {login} from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { Row, Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";



function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        console.log(username, password)
        e.preventDefault()

        dispatch(login(username, password))
    }

  return (
    <Column>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <br />
        </div>
        <div>
          <button onClick={handleLogin}>Submit</button>
        </div>
      </form>
    </Column>
  );
}


export default LoginForm;
