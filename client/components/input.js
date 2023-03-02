import React from 'react';
import '../style.css';
import Main from 'react';
import { useState } from 'react';
import { Modal } from './modal'


function Input({ listName }) {
  const userEmail = 'joyce@test.com';
  const [ foodItem, setFood ] = useState('');
  const [ foodList, setFoodList ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/foodlist/${userEmail}`);
      const usersFood = await response.json();
      console.log(usersFood.food);
      setFood(usersFood);
    } catch (err) {
      console.error(err)
    }
  }

  const addItem = () => {
    let counter = true;
    let foodToAdd; 
    while(counter) {
      getData();
      counter = false;
      console.log('this is the state: ',foodItem[0].food);
      foodToAdd = foodItem[0].food;
    }
    setFoodList(foodList.concat(<foodItem key={foodList.length} />))
  }
  // when the button Add is clicked
  // create a new list item with whatever was fetched

  return (
    <div className="intro">
      <h1 >{listName}</h1>
      <div className="button-container">
        {/* onClick set state of div coming up as true */}
        <button className="search-button" onClick={() => setShowModal(true)}>Add</button>
        {foodList}
      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} />}
    </div>
  )
}

export { Input };