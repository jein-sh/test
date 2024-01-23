import { store } from "./store";

export type UserType = {
  id: string,
  avatarUrl: string,
  firstName: string,
  lastName: string,
  userTag: string,
  department: string,
  position: string,
  birthday: string,
  phone: string
}

export type UsersType = UserType[]

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;