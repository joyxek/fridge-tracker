import React from 'react';
import * as async_hooks from 'async_hooks';
import '../style.css';
import { useState } from 'react';
import { Modal } from './modal'

// props sent through are ListName (header) and getData (which stores an object with everything)
function Input({ listName, getData }) {
  const userEmail = 'joyce@test.com';

  // declaring state for my foodList 
  // const [ foodList, setFoodList ] = useState([]);

  // declaring state for whether or not my modal box will appear
  const [ showModal, setShowModal ] = useState(false);
  
  // onClick of delete button calling a fetch request to the delete method 
  const deleteItem = async () => {
    try {
      const response = await fetch( `http://localhost:8000/foodlist/${getData.id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <div className="intro">
      {/* listName was sent as a prop from Main and it should render the heading that we passed in */}
      <h1 >{listName}</h1>
      <div className="button-container">
        <button className="add" onClick={() => setShowModal(true)}>Add</button>
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        <button className="delete" onClick={deleteItem}>DELETE</button>
      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} foodList={getData} />}
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} foodList={getData} />}
    </div>
  )
};


export { Input };