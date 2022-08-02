import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Auth from './components/Auth/Auth';
import React, {useEffect} from 'react';
import { loadUserAction } from './actions/User';
import TasksPage from './components/Tasks/TasksPage';
import OpenTaskPage from './components/Tasks/OpenTaskPage';
import Navbar from './components/Tasks/Navbar';
import Profile from './components/Auth/Profile';
import ErrorPage from './components/ui/ErrorPage';


function App() {
  var isAuth = useSelector((state) => (state.userState.isAuth))
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadUserAction());
    },[dispatch])
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path='/'>
{ isAuth ? <TasksPage /> : <Auth />  }
        </Route> 

        <Route exact path='/openTask/:id'>
            <OpenTaskPage /> 
        </Route> 


        <Route exact path='/openProfile/:id'>
            <Profile />  
        </Route> 


        <Route exact path='*'>
            <ErrorPage />  
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;

