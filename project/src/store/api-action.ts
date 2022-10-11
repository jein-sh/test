import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { loadUsers, setDataLoadedStatus } from './action';

export const fetchUsersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchUsers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get("/users?__dynamic=true");
    dispatch(setDataLoadedStatus(true));
    dispatch(loadUsers(data.items));
    dispatch(setDataLoadedStatus(false));
  },
);
