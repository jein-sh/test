import {createAction} from '@reduxjs/toolkit';
import { UsersType } from '../types';

export const loadUsers = createAction<UsersType>('data/loadUsers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const departmentChoice = createAction<{currentDepartment : string}>('departmentChoice');

export const filterUsers = createAction('filterUsers');