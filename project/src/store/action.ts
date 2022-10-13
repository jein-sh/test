import {createAction} from '@reduxjs/toolkit';
import { UsersType } from '../types';

export const setError = createAction<boolean>('data/setError');

export const loadUsers = createAction<UsersType>('data/loadUsers');

export const loadDepartmentUsers = createAction<UsersType>('data/loadDepartmentUsers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const departmentChoice = createAction<{currentDepartment : string}>('filter/departmentChoice');

export const filterUsers = createAction('filter/filterUsers');

export const sortTypeChoice = createAction<{currentSortType : string}>('sort/sortTypeChoice');

export const sortUsers = createAction('sort/sortUsers');

export const getSearchQuery = createAction<{searchString : string}>('search/getSearchQuery');

export const filterSearch =createAction('search/filterSearch');
