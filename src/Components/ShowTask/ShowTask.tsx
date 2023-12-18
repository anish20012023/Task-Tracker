import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store';
import emptyImg from '../../assests/empty.png';
import AllTask from './allTask';
import { useState } from 'react';

const ShowTask = () => {
  const allTask = useSelector((state: RootState) => state.task.AllTask);
  const [curr, setCurr] = useState<string>('All');
  const favTask = allTask.filter((task) => task.imp === true);

  if (allTask.length === 0) {
    return (
      <div className="empty-container">
        <img src={emptyImg} alt="" />
      </div>
    );
  }
  return (
    <div className='showtask-container'>
      <div className="navbtn">
        <button className='nav-btn all'
          onClick={() => {
            setCurr('All');
          }}
        >
          All
        </button>
        <button className='nav-btn fav'
          onClick={() => {
            setCurr('Imp');
          }}
        >
          Important Task
        </button>
      </div>
      {curr == 'All' ? <AllTask allTask={allTask} /> : curr==='Imp'?<AllTask allTask={favTask} />:undefined}
    </div>
  );
};
export default ShowTask;
