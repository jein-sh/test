import { Ul } from "../../styled";
import { Avatar, Info, Name, Position, UserContainer } from "../user/styles";
import { UsersContainer, UsersItem } from "../users/styles";

function UsersSkeleton(): JSX.Element {
  const n = 7;
  const randomArray = Array.from(Array(n).keys())

  return (
    <UsersContainer>
      <Ul>
        { randomArray.map((item) => 
          <UsersItem key = {item}>
            <UserContainer>
              <Avatar />
              <Info>
                <Name /> 
                <Position />
              </Info>
            </UserContainer>
          </UsersItem>
        )}
      </Ul>
    </UsersContainer>
  );
}

export default UsersSkeleton;