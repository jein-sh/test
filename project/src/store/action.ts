import {createAction} from '@reduxjs/toolkit';
import { UsersType } from '../types';

export const loadUsers = createAction<UsersType>('data/loadUsers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');