import React from 'react';

function Login(props){
    console.log(props)
    return(
        <div>
           <form > 
            <label>Username:
                <input type='text' />
            </label>
            <br/>
            <label>Password:
                <input type='text'/>
            </label>
            <br/>
            <button type='submit'>Login</button>
           </form>
        </div>
    )
}
export default Login;