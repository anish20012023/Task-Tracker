import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TaskIn, updateEditTask } from '../../Redux/TaskSlice';
import { useDispatch } from 'react-redux';
import './ShowTask.css';
import { FaStar } from 'react-icons/fa';
import { addFav, removeTask } from '../../Redux/TaskSlice';
interface taskProp {
  allTask: TaskIn[];
}
const AllTask: React.FC<taskProp> = ({ allTask }) => {
  const initialdata = { id: '', title: '', description: '', selected: false, time: '', imp: false };
  const [edit, setEdit] = useState<boolean>(false);
  const [editdata, setEditData] = useState<any>(initialdata);
  const dispatch = useDispatch();
  function handleFav(id: string) {
    dispatch(addFav(id));
  }

  function OpenEdit(id: string) {
    let data = allTask.find((task) => task.id === id);
    setEdit(true);
    setEditData(data);
  }

  const handleform = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let time = new Date().toLocaleString();
    const { name, value } = e.target;

    setEditData({ ...editdata, time, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateEditTask(editdata));
    setEditData(initialdata);
    setEdit(false);
  };

  return (
    <>
      <div className="task-Container">
        {allTask.map((task) => {
          return (
            <div className="task" key={task.id}>
              <h4 className="title">{task.title}</h4>
              <p className="descp">{task.description}</p>
              <div className="time-btn">
                <span>
                  <p className="date">{task.time}</p>
                  <button
                    onClick={() => {
                      handleFav(task.id);
                    }}
                  >
                    {task.imp ? <FaStar style={{ color: 'yellow' }} /> : <FaStar style={{ color: 'white' }} />}
                  </button>
                </span>
                <div className="task-btn">
                  <button
                    onClick={() => {
                      dispatch(removeTask(task.id));
                    }}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      OpenEdit(task.id);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {edit ? (
        <div className="overlay">
          <div>
            <form onSubmit={handleSubmit} className="edit-task">
              <input type="text" className="edit-title" placeholder="Title" value={editdata.title} name="title" onChange={handleform} />
              <textarea
                name="description"
                className="edit-descp"
                id=""
                placeholder="Description"
                value={editdata.description}
                onChange={handleform}
              />
              <div className="edit-btn-div">
                <button className="edit-saveBtn" type="submit">
                  Save
                </button>
                <button className="edit-saveBtn" type="submit" onClick={() => setEdit(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default AllTask;
