import {createReducer} from '@reduxjs/toolkit';
import { departmentChoice, filterUsers, loadUsers, setDataLoadedStatus, sortTypeChoice, sortUsers } from './action';
import { UsersType } from '../types';
import { getFilterUsers, getSortedUsers } from '../untils';
import { SortType } from '../const';

type InitialState = {
  isDataLoaded: boolean,
  allUsers: UsersType,
  users: UsersType,
  department: string,
  sortType: string
};

const initialState : InitialState = {
  isDataLoaded: false,
  allUsers: [],
  users: [],
  department: 'all',
  sortType: SortType.Abc
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
    .addCase(sortTypeChoice, (state, action) => {
      const {currentSortType} = action.payload;
      state.sortType = currentSortType;
    })
    .addCase(sortUsers, (state) => {
      state.users = getSortedUsers(state.users, state.sortType);
    })

});

export {reducer};