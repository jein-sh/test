import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types';
import { filterUsers, loadUsers, setDataLoadedStatus, sortUsers } from './action';

export const fetchUsersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchUsers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get("/users?__example=all");
    dispatch(setDataLoadedStatus(true));
    dispatch(loadUsers(data.items));
    dispatch(filterUsers());
    dispatch(sortUsers());
    dispatch(setDataLoadedStatus(false));
  },
);
