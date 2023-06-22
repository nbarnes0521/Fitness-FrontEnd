// POSTING ACTIVITIES /////
import React from 'react';
import { useState } from 'react';

const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`

const createActivity = async (name, description) => {
  try {
    const token = 'TOKEN_STRING_HERE'; // Replace with your actual token
    const response = await fetch(`${BASE_URL}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};




export default function Pactivities() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await createActivity(name, description);
      console.log(result);
      // Handle the result or perform any necessary actions
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Activity Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Activity Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Activity</button>
      </form>
    );
  }
  