import React, { useEffect, useState } from 'react';
// import stylesheets here
import './style.css';
// import my components here
import { Input } from './components/input';
import { ListInput } from './components/ListInput';
import * as async_hooks from 'async_hooks';
// import Auth from './components/Auth';
// import { ids } from 'webpack';


function Main() {
  // testing my functionality with hard coded email address
  const userEmail = 'joyce@test.com';

  // using react hook to initialize a state variable (foodItem) with an empty string as its initial value
  // also creating a functino to update the value of foodItem
  const [ foodItem, setFood ] = useState('');

  const getData = async () => {
    try {
      // grabbing the response from this location, it should return us an array of objects 
      //  [{
      //   id: 0,
      //   user_email: joyce@test.com,
      //   food: berries,
      //   date: Jan 29, 3034,
      //   expiration: 14 days
      // }]
      const response = await fetch(`http://localhost:8000/foodlist/${userEmail}`);
      const usersFood = await response.json();
      console.log(usersFood);
      // using state function to set my foodItem to what is at the response json at index 0 on the key food
      setFood(usersFood[0]);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, []);

  return (
    <div>
      <Input listName={'Your groceries 🥑'} getData={foodItem} />
      <ListInput getData={getData}/>
    </div>
  )
};


export default Main;

