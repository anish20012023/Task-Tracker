import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TaskSlice from './TaskSlice';

const RootState = combineReducers({
  task: TaskSlice,
});
export type RootState = ReturnType<typeof RootState>;
const store = configureStore({
  reducer: RootState,
});
export default store;
