import { useState } from 'react';
import React from 'react';
// not sure what this import is doing?
// import e from 'express';
import * as async_hooks from 'async_hooks';


const Modal = ({ mode, setShowModal, foodList }) => {

  const editMode = mode === 'edit' ? true: false;

  const [ data, setData ] = useState({
    user_email: editMode ? foodList.user_email : null,
    food: editMode ? foodList.food : "",
    expiration: editMode ? foodList.expiration : "",
    date: editMode ? foodList.date : new Date()
  });


  // post a users response (CREATE) this will get sent to the server
  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/foodlist/', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        // data is an object, stringify before sending it to server
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('POSTING SUCCESS');
        setShowModal(false);
        foodList();
      }
      console.log(response);
    } catch {
      console.error(err);
    }
  }


  const editData = async (e) => {
    e.preventDefault();
    try {
       const response = await fetch(`http://localhost:8000/foodlist/${foodList.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
       })
       if (response.status === 200) {
        setShowModal(false)
        foodList();
       }
    } catch (err) {
      console.error(err);
    }
  }



  const handleChange = (e) => {
    console.log('changing',e);
    const { name, value } = e.target;

    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log(data);
  }

  return (
    <div>
      <div>
        <div>
          {/* when user clicks the buttons 'add' 'edit' this modal should open with the user's text button in the heading */}
          <h3>Let's {mode} your groceries</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" add something"
            name="food"
            onChange={handleChange}
          />
          <br/>
          <input
            required
            placeholder=" expiration"
            onChange={handleChange}
          />
          <br />
          <input 
            required
            placeholder=" date"
            onChange={handleChange}
          />
          <input type="Submit" onClick={editMode ? editData : postData} />
        </form>
      </div>
    </div>
  )

}

export { Modal };