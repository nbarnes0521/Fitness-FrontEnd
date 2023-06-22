import React from "react";
import { useState } from "react";

export { default as App } from './Tabs';


// Login / NavBar ///

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: 'superman27',
                password: 'krypt0n0rbust'
              }
            })
          });
          const result = await response.json();
          // As written below you can log your result
          // to check what data came back from the above code.
          console.log(result)
          return result
        } catch (err) {
          console.error(err);
        }
      }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(username, password)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3> Register  </h3>
            <input 
                type="text"
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
                />
            <input 
                type="password"
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
                />
            <button type='submit'>
                Submit
            </button>
        </form>
    )    

}
