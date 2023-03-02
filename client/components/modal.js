import { useState } from 'react';
import React from 'react';


const Modal = ({ mode, setShowModal }) => {

  const editMode = mode === 'edit' ? true: false;

  const [data, setData] = useState({
    user_email:"",
    food: "",
    expiration: "",
    date: editMode ? "": new Date()
  });


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
          <h3>Let's {mode} your groceries</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" add something"
            name="title"
            onChange={handleChange}
          />
          <br/>
          <input
            required
            placeholder=" expiration date"
            onChange={handleChange}
          />
          <input type="Submit"/>
        </form>
      </div>
    </div>
  )

}

export { Modal };