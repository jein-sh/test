import {createReducer} from '@reduxjs/toolkit';
import { loadUsers, setDataLoadedStatus } from './action';
import { UsersType } from '../types';

type InitialState = {
  isDataLoaded: boolean,
  users: UsersType
};

const initialState : InitialState = {
  isDataLoaded: false,
  users: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers, (state, action) => {
      state.users = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })

});

export {reducer};