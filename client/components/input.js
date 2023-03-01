import React from 'react';
import '../style.css';
import Main from 'react';
import { useState } from 'react';



function Input({ listName }) {

  const addItem = () => {
    console.log('item added')
  }

  return (
    <div className="intro">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="search-button" onClick={addItem}>Add</button>
      </div>
    </div>
  )
}

export { Input };