import React from 'react';
import '../style.css';
import * as async_hooks from 'async_hooks';
// import Main from 'react';
import { useState } from 'react';
// import { Modal } from './modal'

// getData is a function that fetches at a usersEmail for the object 
const ListInput = ({ getData }) => {

  const [ foodItem, setFood ] = useState('');

  const renderFood = () => {
    try {
      setFood(getData);
    } catch (err) {
      console.log('error in listInput');
    }
  };
 
  return (
    <div>
      {renderFood}
    </div>
  )
}
export { ListInput };