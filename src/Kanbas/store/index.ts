import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from '../Courses/Modules/reducer';
import { Module } from '../../types';

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});

export default store;
