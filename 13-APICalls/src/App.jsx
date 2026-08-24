//API Calling Through fetch
import React, { useState } from "react";
import AxiosCalling from './components/axiosCalling'

const App = () => {
  // State to store API data
  const [users, setUsers] = useState([]);

  // Calling API through fetch()
  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Convert response into JSON
    const data = await response.json();

    console.log(data);

    // Store API data inside users state
    setUsers(data);
  };

  return (
    <div>
      <button onClick={getUsers}>Get Data</button>

      <div>
        {users.map((user) => {
          return <h3 key={user.id}>{user.id} {user.name}</h3>;
        })}
      </div>

      
      <AxiosCalling />
      
    </div>
  );
};

export default App;