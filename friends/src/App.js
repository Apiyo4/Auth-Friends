import React from 'react';
import './App.css';
import Login from './components/Login';
import {Route, Redirect} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import {Link, withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to= '/friends'>Friends</Link>
      <Link to= '/'>Log out</Link>
      <Route exact path= '/' component= {Login}/>
      {/* <Route path= '/friends' component= {FriendsList} /> */}
      <PrivateRoute path='/friends' component={FriendsList} />
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
