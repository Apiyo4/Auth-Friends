import React, {useState} from 'react';
import axios from '../axios';

function AddFriend(props){
    const [info, setInfo] = useState({
        name: '',
        age: '',
        email: ''
    });
    const handleChange= e=>{
        setInfo({
            ...info,
            [e.target.name] : e.target.value,
        })
        
    }
    const submit = e =>{
        e.preventDefault()
        axios().post('http://localhost:5000/api/friends', info)
        .then(res=>{
            console.log(res.data);
        })
        .catch(er=>{
            alert(er.message)
        }

        )
        props.history.push('/friends')
    }
    const logout = ()=>{
        localStorage.removeItem('token');
        props.history.push('/')
    }
    return(
        <div>
            <div className='marginRight'>
            <div className='blue' onClick={logout}>Log out</div>
            </div>

            <form>
                <label>Name:
                    <span>
                    <input type='text' name='name'  value= {info.name} onChange={handleChange}/>
                    </span>
                </label>
                <br />
                <label>Age:
                    <span>
                    <input type='text' name='age' value= {info.age} onChange={handleChange}/>
                    </span>
                </label>
                <br />
                <label>Email:
                    <span>
                    <input type='text' name='email' value={info.email} onChange={handleChange}/>
                    </span>
                </label>
                <br />
                <button onClick={submit}>Add Friend</button>
            </form>
        </div>
    )
}
export default AddFriend;