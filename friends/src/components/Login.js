import React, { useRef } from 'react';
import axios from 'axios';



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