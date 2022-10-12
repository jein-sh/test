import { SortType } from "../../const";
import { useAppSelector } from "../../hooks";
import { Ul } from "../../styled";
import { separateDateAfter, separateDateBefore } from "../../untils";
import User from "../user/user";
import { UsersContainer, UsersItem, UsersSeparate, UsersYear } from "./styles";

function Users(): JSX.Element {

  const {users} = useAppSelector((state) => state);

  const {sortType} = useAppSelector((state)=> state);

  const usersBeforeToday = separateDateBefore(users);

  const usersAfterToday = separateDateAfter(users)

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
            <UsersYear>2023</UsersYear>
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
          {users.map((user) => {
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
