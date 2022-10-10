import Ul from "../../styled/ul/ul";
import User from "../user/user";
import { UsersContainer, UsersItem, UsersSeparate, UsersYear } from "./styles";

function Users(): JSX.Element {
  return (
    <UsersContainer>
      <Ul>
        <UsersItem>
          <User />
        </UsersItem>
      </Ul>
      <UsersSeparate>
        <UsersYear>2023</UsersYear>
      </UsersSeparate>
      <Ul>
        <UsersItem>
          <User />
        </UsersItem>
      </Ul>
    </UsersContainer>
  );
}

export default Users;
