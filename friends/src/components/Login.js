import React, { useRef } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Login(props){
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/login',{
            username: usernameRef.current.value,
            password: passwordRef.current.value
        
        }).then(res=>{
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends');
            
        }).catch(err=>{
          
            alert(err.message)
            
        })
       
    }
    return(
        <div>
            <div className='marginRight'>
            <Link to= '/friends'>Friends</Link>
            </div>
           <form onSubmit={submit}> 
            <label>Username:
                <span>
                <input type='text' ref ={usernameRef} />
                </span>
            </label>
            <br/>
            <label>Password:
                <span>
                <input type='text' ref={passwordRef}/>
                </span>
            </label>
            <br/>
            
            <button type='submit'>Login</button>
           </form>
        </div>
    )
}
export default Login;