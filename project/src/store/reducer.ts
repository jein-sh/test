import {createReducer} from '@reduxjs/toolkit';
import { departmentChoice, filterSearch, filterUsers, getSearchQuery, loadUsers, setDataLoadedStatus, setError, sortTypeChoice, sortUsers } from './action';
import { UsersType } from '../types';
import { getFilterSearch, getFilterUsers, getSortedUsers } from '../untils';
import { SortType } from '../const';

type InitialState = {
  isDataLoaded: boolean,
  allUsers: UsersType,
  users: UsersType,
  department: string,
  sortType: string,
  search?: string,
  searchUsers?: UsersType,
  error: boolean,
};

const initialState : InitialState = {
  isDataLoaded: true,
  allUsers: [],
  users: [],
  department: 'all',
  sortType: SortType.Abc,
  error: false,
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
    .addCase(getSearchQuery, (state, action) => {
      const {searchString} = action.payload;
      state.search = searchString;
    })
    .addCase(filterSearch, (state) => {
      if (state.search) {
        state.searchUsers = getFilterSearch(state.users, state.search);
      } else {
        state.searchUsers = undefined
      }
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});

export {reducer};