import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from '../Courses/Modules/reducer';
import assignmentsReducer from '../Courses/Assignments/reducer';
import { Assignment, Module } from '../../types';

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };

  assignmentsReducer: {
    assignments: Assignment[];
    assignment: Assignment;
  };
}

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});

export default store;
