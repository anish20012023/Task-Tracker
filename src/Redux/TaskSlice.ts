import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
export interface TaskIn {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  time: string;
  imp: boolean;
}

export interface taskIn {
  AllTask: TaskIn[];
}
let initialState: taskIn = {
  AllTask: [],
};

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<TaskIn, 'selected' | 'id' | 'time' | 'imp'>>) => {
      let time = new Date().toLocaleString();
      let newTask = { id: uuid(), time, selected: false, imp: false, ...action.payload };
      state.AllTask.push(newTask);
    },
    addFav: (state, action: PayloadAction<string>) => {
      state.AllTask.forEach((task) => {
        if (task.id === action.payload) {
          task.imp = !task.imp;
        }
      });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.AllTask = state.AllTask.filter((task) => task.id !== action.payload);
    },

    updateEditTask: (state, action: PayloadAction<TaskIn>) => {
      const updatedTask = action.payload;
      state.AllTask = state.AllTask.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    },
  },
});

export const { addTask, addFav, removeTask, updateEditTask } = TaskSlice.actions;
export default TaskSlice.reducer;
