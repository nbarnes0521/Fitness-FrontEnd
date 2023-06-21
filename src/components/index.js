import React from "react";

export { default as App } from './App';


// Login / NavBar ///

export default function App() {
    return (
        <form>
            <input 
                type="text"
                placeholder='Enter Username'
                />
            <input 
                type="password"
                placeholder='Enter Password'
                />
            <button type='submit'>
                Submit
            </button>
        </form>
    )    

}
