import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { checkIfLoggedIn } from '../actions/auth';
import LoginPage from "./LoginPage";
import DashboardPage from './DashboardPage'

function App() {

  const dispatch = useDispatch()
  let user = useSelector(state => state.auth.user)
  
  useEffect(() => {
    dispatch(checkIfLoggedIn())
  }, []);

  return (
    <div>

      {user ? <DashboardPage /> : <LoginPage />}
    </div>
  );
}



export default App
