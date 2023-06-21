import React from "react";
import { useState } from "react";

export { default as App } from './Tabs';


// Login / NavBar ///

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log(username, password)
    return (
        <form>
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
