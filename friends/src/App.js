import React from 'react';
import './App.css';
import Login from './components/Login';
import {Route, Redirect} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import { withRouter} from 'react-router-dom';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <Route exact path= '/' component= {Login}/>
      {/* <Route path= '/friends' component= {FriendsList} /> */}
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute path='/friends/add' component={AddFriend} />
    </div>
  );
}
const PrivateRoute =({component: Component, ...rest})=>(
  <Route 
    {...rest} 
    render= {props =>
    localStorage.getItem('token')?(< Component {...props} />): (<Redirect to = '/' />)
    }
  />
)
export default withRouter(App);
