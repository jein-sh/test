import { useAppSelector } from "../../hooks";
import { Ul } from "../../styled";
import User from "../user/user";
import { UsersContainer, UsersItem, UsersSeparate, UsersYear } from "./styles";

function Users(): JSX.Element {

  const {users} = useAppSelector((state) => state);

  return (
    <UsersContainer>
      <Ul>
        {users.map((user) => {
          const keyValue = user.id;

          return(
            <UsersItem key={keyValue}>
              <User user= {user}/>
            </UsersItem>
          );
        })}
      </Ul>
      <UsersSeparate>
        <UsersYear>2023</UsersYear>
      </UsersSeparate>
    </UsersContainer>
  );
}

export default Users;
