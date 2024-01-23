import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { SortType } from './const';
import { UsersType } from './types';
dayjs.extend(dayOfYear);

export const nextYear = Number(dayjs().format("YYYY")) + 1;

export const getFilterUsers = (users : UsersType, department : string) => {
    if (department === 'all') {
        return users;
    } else {
        return users.filter((user) => user.department === department);
    } 
}

const sortUsers: {[sortType : string] : (users : UsersType) => UsersType} = {
 
    [SortType.Abc]: (users) => users.sort((userA, userB) => (`${userA.firstName} ${userA.lastName}`).localeCompare(`${userB.firstName} ${userB.lastName}`)),
  
    [SortType.Date]: (users) => users.sort((userB, userA) => (dayjs(userB.birthday).dayOfYear() - dayjs(userA.birthday).dayOfYear())),
  
};
   
export const getSortedUsers = (users : UsersType, sortType : string) : UsersType => sortUsers[sortType](users);

export const separateDateBefore = (users: UsersType) => {
    const today = dayjs().dayOfYear();
    return users.filter(user => dayjs(user.birthday).dayOfYear() < today);
}

export const separateDateAfter = (users: UsersType) => {
    const today = dayjs().dayOfYear();
    return users.filter(user => dayjs(user.birthday).dayOfYear() >= today);
}

export const getFilterSearch = (users: UsersType, search: string) => {
    return users.filter((user) => (user.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1)
      || ( user.lastName.toLowerCase().indexOf(search.toLowerCase()) > -1 )
      || ( user.userTag.toLowerCase().indexOf(search.toLowerCase()) > -1 )
    );
}
