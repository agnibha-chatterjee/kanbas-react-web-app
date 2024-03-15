import { createSlice } from '@reduxjs/toolkit';
import { modules } from '../../Database';
import { Lesson, Module } from '../../../types';

const sampleLessons: Lesson[] = [
  {
    _id: 'L001',
    name: 'Sample Lesson 1',
    description: 'Lesson 1 Description',
    module: '0'
  },
  {
    _id: 'L002',
    name: 'Sample Lesson 2',
    description: 'Lesson 2 Description',
    module: '0'
  },
  {
    _id: 'L003',
    name: 'Sample Lesson 3',
    description: 'Lesson 3 Description',
    module: '0'
  }
];

const initialState: { modules: Module[]; module: Module } = {
  modules: modules,
  module: {
    _id: '0',
    name: 'New Module 123',
    description: 'New Description'
  }
};

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
          lessons: sampleLessons
        },
        ...state.modules
      ];
    },
    deleteModule: (state, action) => {
      console.log('agni');
      state.modules = state.modules.filter(
        module => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map(module => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      console.log(state);
      state.module = action.payload;
    }
  }
});

export const { addModule, deleteModule, updateModule, setModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
