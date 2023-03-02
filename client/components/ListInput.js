import React from 'react';
import '../style.css';
import Main from 'react';
import { useState } from 'react';


const ListInput = ({ food }) => {
  return (
    <li>
      <p>
        {food.food}
      </p>
      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </li>

    
  )
}
export { ListInput };