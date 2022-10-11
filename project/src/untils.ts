import { UsersType } from './types';

export const getFilterUsers = (users : UsersType, department : string) => {
    if (department === 'all') {
        return users;
    } else {
        return users.filter((user) => user.department === department);
    }
    
    
}