import { SortType } from "../../const";
import { useAppSelector } from "../../hooks";
import { Ul } from "../../styled";
import { nextYear, separateDateAfter, separateDateBefore } from "../../untils";
import ErrorBlock from "../error-block/error-block";
import User from "../user/user";
import { UsersContainer, UsersItem, UsersSeparate, UsersYear } from "./styles";

function Users(): JSX.Element {
  const {users, searchUsers} = useAppSelector((state) => state);

  const {sortType} = useAppSelector((state)=> state);

  let renderedUsers = searchUsers ? searchUsers : users;

  const usersBeforeToday = separateDateBefore(renderedUsers);

  const usersAfterToday = separateDateAfter(renderedUsers);

  if (renderedUsers.length === 0) {
    return <ErrorBlock
      errorImg="glass"
      errorTitle="Мы никого не нашли"
      errorText="Попробуй скорректировать запрос" 
    />
  }

  return (
    <UsersContainer>
      { sortType === SortType.Date ? 
        <>
          <Ul>
            {usersAfterToday.map((user) => {
              return(
                <UsersItem key={user.id}>
                  <User user= {user} dateShow/>
                </UsersItem>
              );
            })}
          </Ul>
          <UsersSeparate>
            <UsersYear>{nextYear}</UsersYear>
          </UsersSeparate>
          <Ul>
            {usersBeforeToday.map((user) => {
              return(
                <UsersItem key={user.id}>
                  <User user= {user} dateShow/>
                </UsersItem>
              );
            })}
          </Ul>
        </> :
        <Ul>
          {renderedUsers.map((user) => {
            return(
              <UsersItem key={user.id}>
                <User user= {user} dateShow={false}/>
              </UsersItem>
            );
          })}
        </Ul>
      }
    </UsersContainer>
  );
}

export default Users;