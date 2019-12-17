import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props){
    console.log(props)
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const submit = ()=>{
        axios.post('http://localhost:5000/login',
        {
         username: usernameRef.current.value,
         password: passwordRef.current.value   
        })
        
       
    }
    return(
        <div>
           <form onSubmit={submit}> 
            <label>Username:
                <input type='text' ref ={usernameRef} />
            </label>
            <br/>
            <label>Password:
                <input type='text' ref={passwordRef}/>
            </label>
            <br/>
            
            <button type='submit'>Login</button>
           </form>
        </div>
    )
}
export default Login;