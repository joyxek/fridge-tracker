import { useState } from 'react';
import React from 'react';
// not sure what this import is doing?
// import e from 'express';
import * as async_hooks from 'async_hooks';

const EditModal = ({ mode, setShowModal, getData }) => {

  const [ data, setData ] = useState({
    user_email: getData.user_email,
    food: getData.food,
    expiration: getData.expiration,
    date: getData.date
  });

   const editData = async (e) => {
    e.preventDefault();
    try {
       const response = await fetch(`http://localhost:8000/foodlist/${getData.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
       })
       if (response.status === 200) {
        setShowModal(false)
        getData();
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

          {/* render your already existing database */}
          <h3>here's what you already have: </h3>

          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" edit item"
            name="food"
            onChange={handleChange}
          />
          <br/>
          <input
            required
            maxLength={30}
            placeholder=" edit expiration"
            name="expiration"
            onChange={handleChange}
          />
          <br />
          <input 
            required
            placeholder=" edit date"
            onChange={handleChange}
          />
          <input type="Submit" onClick={editData} />
        </form>
      </div>
    </div>
  )


}

const AddModal = ({ mode, setShowModal, getData }) => {


  const [ data, setData ] = useState({
    user_email: null,
    food: "",
    expiration:  "",
    date: new Date()
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
        getData(); // this is not a function
      }
      console.log(response);
    } catch {
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
            maxLength={30}
            placeholder=" expiration"
            name="expiration"
            onChange={handleChange}
          />
          <br />
          <input 
            required
            placeholder=" date"
            onChange={handleChange}
          />
          <input type="Submit" onClick={postData} />
        </form>
      </div>
    </div>
  )

}

const DeleteModal = ({ mode, setShowModal, getData }) => {

  const [ data, setData ] = useState({
      user_email: getData.user_email,
      food: getData.food,
      expiration: getData.expiration,
      date: getData.date
    });

  // onClick of delete button calling a fetch request to the delete method 
  const deleteData = async () => {
    try {
      const response = await fetch( `http://localhost:8000/foodlist/${getData.id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        console.log('DELETE ITEM SUCCESS');
        getData(); // this is not a function
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
            placeholder=" delete something"
            name="food"
            onChange={handleChange}
          />
          <input type="Submit" onClick={deleteData} />
        </form>
      </div>
    </div>
  )

}
export { AddModal, EditModal, DeleteModal };