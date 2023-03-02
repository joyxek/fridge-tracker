import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Main from './Main';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends Component {
  render() {
    return (
      console.log('the app from index.js is rendering'),
      <Main />
    )
  }
}

root.render(<App />);