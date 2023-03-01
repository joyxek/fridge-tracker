import React, { useState } from 'react';
import './style.css';
// import inputForm from './components/search';
// import my components here

// import stylesheets here


function Main() {
  // setting state to grab item from the user
  const [item, setList] = useState('');

  // setting state to add to my groceries list from user
  const [itemsList, setUpdate] = useState([]);

  const handleChange = (event) => {
    setList(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setUpdate([...itemsList, item]);
    setList('');
  }
  
  return(
    <div className="intro">
      <h1 className="title">Let's add groceries</h1>
      <div className="search-area">
        <form onSubmit={handleInputSubmit}>
          <input 
            className="search-bar"
            type="text"
            value={item}
            onChange={handleChange}
          /> 
          <button 
            type="submit"
            className="search-button-text"
          >Add</button>
        </form>
        <ul>
          {itemsList.map((input, index) => {
            <li key={index}>{input}</li>
          })}
        </ul>
          <h2> Input: {item} </h2>
      </div>
          <h2> Groceries: {itemsList}</h2>
    </div>
  )
}

export default Main;

