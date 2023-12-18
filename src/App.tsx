import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CreateTask from './Components/CreateTask/CreateTask';
import ShowTask from './Components/ShowTask/ShowTask';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillMinusCircle } from 'react-icons/ai';

function App() {
  const [isopen, setIsOpen] = useState<boolean>(false);
  function handleOpen(val: boolean) {
    setIsOpen(val);
  }
  return (
    <div className="Container">
      <Header />
      {isopen ? (
        <div className="createTask-overlay">
          <CreateTask handleOpen={handleOpen} />
        </div>
      ) : undefined}
      <ShowTask />
      <button className="plus-min-icon" onClick={() => setIsOpen(!isopen)}>
        {!isopen ? <IoIosAddCircle className="addIcon" /> : <AiFillMinusCircle className="minusIcon" />}
      </button>
    </div>
  );
}

export default App;
