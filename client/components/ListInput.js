import React from 'react';
import '../style.css';
import * as async_hooks from 'async_hooks';
// import Main from 'react';
// import { useState } from 'react';
// import { Modal } from './modal'


const ListInput = ({ getData }) => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {console.log('this is food from listInput: ', getData)};
    </div>
  )
}
export { ListInput };