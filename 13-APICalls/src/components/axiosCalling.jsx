import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const AxiosCalling = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setUsers(response.data)
};
  return (
    <div>
       <button onClick={getUsers}>Get Data From Axios</button>
       <div>
        {users.map((user,idx)=>{
            return <h3 key={idx}>{user.name}</h3>

        })}
        </div> 
    </div>
  )
}

export default AxiosCalling