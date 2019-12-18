import React from 'react';

function AddFriend(){
    return(
        <div>
            <form>
                <label>Name:
                    <input type='text' name= 'name'/>
                </label>
                <br />
                <label>Age:
                    <input type='text' name= 'age'/>
                </label>
                <br />
                <label>Email:
                    <input type='text' name= 'email'/>
                </label>
                <br />
                <button>Add Friend</button>
            </form>
        </div>
    )
}
export default AddFriend;