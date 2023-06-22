import React from 'react';
import { useEffect, useState } from 'react';

const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`

const fetchActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };


const list = ['Routines', 'Activities', 'Users'];

export default function Tabs() {
    const [activities, setActivities] = useState([]);
  
    useEffect(() => {
      const getActivities = async () => {
        const result = await fetchActivities();
        setActivities(result);
      };
  
      getActivities();
    }, []);
  
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {activities.map((activity) => (
          <div key={activity.id} style={{ marginLeft: '10px' }}>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    );
  }
  