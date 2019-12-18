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
    return(
        <div>
            <form>
                <label>Name:
                    <input type='text' name='name'  value= {info.name} onChange={handleChange}/>
                </label>
                <br />
                <label>Age:
                    <input type='text' name='age' value= {info.age} onChange={handleChange}/>
                </label>
                <br />
                <label>Email:
                    <input type='text' name='email' value={info.email} onChange={handleChange}/>
                </label>
                <br />
                <button onClick={submit}>Add Friend</button>
            </form>
        </div>
    )
}
export default AddFriend;