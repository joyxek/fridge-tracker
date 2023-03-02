import React, { useEffect, useState } from 'react';
import './style.css';
import { Input } from './components/input';
import { ListInput } from './components/ListInput';
// import my components here

// import stylesheets here

function Main() {
  return (
    <div>
      <Input listName={'Your groceries 🥑'} />
      <form>
        <input type="text"></input>
      </form>
    </div>
  )
};


export default Main;

