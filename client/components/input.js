import React from 'react';
import * as async_hooks from 'async_hooks';
import '../style.css';
import { useState } from 'react';
import { AddModal, EditModal, DeleteModal } from './modal'

// props sent through are ListName (header) and getData (which stores an object with everything)
function Input({ listName, getData }) {
  const userEmail = 'joyce@test.com';

  // declaring state for my foodList 
  // const [ foodList, setFoodList ] = useState([]);

  // declaring state for whether or not my modal box will appear
  const [ addModal, setAddModal ] = useState(false);

  // declaring state for whether edit modal will open
  const [ editModal, setEditModal ] = useState(false)
  
  // declaring state for whether delete modal will open
  const [ deleteModal, setDeleteModal ] = useState(false)

  return (
    <div className="intro">
      {/* listName was sent as a prop from Main and it should render the heading that we passed in */}
      <h1 className="main-header">{listName}</h1>
      <div className="button-container">
        <button className="add" onClick={() => setAddModal(true)}>ADD</button>
        <button className="edit" onClick={() => setEditModal(true)}>EDIT</button>
        <button className="delete" onClick={() => setDeleteModal(true)}>DELETE</button>
        <button className="bell" onClick={() => console.log('notfied!')}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg" 
            height='10px'
            width='10px'
          ></img></button>
      </div>
      <div className="modals">
        {/* how to do conditional rendering */}
      {addModal && <AddModal mode={'create'} setShowModal={setAddModal} getData={getData} />}
      {editModal && <EditModal mode={'edit'} setShowModal={setEditModal} getData={getData} />}
      {deleteModal && <DeleteModal mode={'delete'} setShowModal={setDeleteModal} getData={getData} />}
      </div>
    </div>
  )
};


export { Input };