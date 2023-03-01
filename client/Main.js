import React, { useState } from 'react';
import './style.css';
import { Input } from './components/input';
// import my components here

// import stylesheets here


function Main() {
  return (
    <div>
      <Input listName={'Your groceries 🥑'} />
    </div>
  )
}
  // setting state to grab item from the user
  // const [item, setList] = useState('');

  // setting state to add to my groceries list from user
  // const [itemsList, setUpdate] = useState([]);

  // const handleChange = (event) => {
  //   setList(event.target.value);
  // };

  // const handleInputSubmit = (event) => {
  //   event.preventDefault();
  //   setUpdate([...itemsList, item]);
  //   setList('');
  // }
  
  // return(
  //   <div className="intro">
  //     <h1 className="title">Let's add groceries</h1>
  //     <div className="search-area">
  //       <form onSubmit={handleInputSubmit}>
  //         <input 
  //           className="search-bar"
  //           type="text"
  //           value={item}
  //           onChange={handleChange}
  //         /> 
          
  //       </form>
  //       <ul>
  //         {itemsList.map((input, index) => {
  //           <li className="users-inputs" key={index}>{input}</li>
  //         })}
  //       </ul>
  //         <h2> Input: {item} </h2>
  //     </div>
  //         <h2> Groceries: {itemsList}</h2>
  //         <Food itemsList={item}/>
  //   </div>
  // )


export default Main;

