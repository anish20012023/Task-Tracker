import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/TaskSlice';
import './CreateTask.css';
import logo from '../../assests/logo.png';

interface newTaskIn {
  title: string;
  description: string;
}
interface propFun {
  handleOpen: (val: boolean) => void;
}
const CreateTask: React.FC<propFun> = ({ handleOpen }) => {
  const [newTask, setNewTask] = useState<newTaskIn>({ title: '', description: '' });
  const dispatch = useDispatch();
  const handleform = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setNewTask({ ...newTask, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask({ title: '', description: '' });
    handleOpen(false);
  };
  return (
    <div className="newtask-container">
      <img className="newtask-logo" src={logo} alt="" />
      <h3>Create New Task</h3>
      <div>
        <form onSubmit={handleSubmit} className="newtask-form">
          <input className="newtask-title" type="text" placeholder="Title" onChange={handleform} value={newTask.title} name="title" required />
          <textarea className="newtask-descp" name="description" id="" placeholder="Description" value={newTask.description} onChange={handleform} />
          <button className="newtask-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateTask;
