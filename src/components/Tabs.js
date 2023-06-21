import React from 'react';

const list = ['Routines', 'Activities', 'Users'];

export default function Tabs() {
  return (
    <div style={{ display: 'flex' }}>
      {list.map((item, index) => (
        <h2 key={index} style={{ marginLeft: '10px' }}>
          {item}
        </h2>
      ))}
    </div>
  );
}