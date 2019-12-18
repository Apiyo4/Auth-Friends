import React, { useState, useEffect } from 'react';
import axios from '../axios';
import {Link} from 'react-router-dom';

function FriendsList(props){
  
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios().get('http://localhost:5000/api/friends',{
        headers: {
            Authorization: token,
        }
        }
        )
        .then(
            res =>{
               setFriends(res.data)
               
            }
        )
        .catch(
            err=>{
                alert(' Please login ');
                props.history.push('/');
            }
        )
    }, [])

    return(
        <div>
            <Link to= '/friends/add'>Add a friend</Link>
            { console.log(friends)}
            {friends.map(friend=>{
                return(
                    <div key ={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>)
            })}
        </div>

    )
}
export default FriendsList;