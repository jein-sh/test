import {createReducer} from '@reduxjs/toolkit';
import { departmentChoice, filterUsers, loadUsers, setDataLoadedStatus } from './action';
import { UsersType } from '../types';
import { getFilterUsers } from '../untils';

type InitialState = {
  isDataLoaded: boolean,
  allUsers: UsersType,
  users: UsersType,
  department: string
};

const initialState : InitialState = {
  isDataLoaded: false,
  allUsers: [],
  users: [],
  department: 'all'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers, (state, action) => {
      state.allUsers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(departmentChoice, (state, action) => {
      const {currentDepartment} = action.payload;
      state.department = currentDepartment;
    })
    .addCase(filterUsers, (state) => {
      state.users = getFilterUsers(state.allUsers, state.department);
    })

});

export {reducer};