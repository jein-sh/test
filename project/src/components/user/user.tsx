import { Img } from "../../styled";
import { Avatar, Department, Link, Name, Tag, UserContainer } from "./styles";


function User(): JSX.Element {
  return (
    <UserContainer>
      <Link href="#todo"></Link>
      <Avatar>
        <Img src="img/avatar.png" width="72" height="72"/>
      </Avatar>
      <div>
        <Name>Андрей Иванов<Tag>iv</Tag></Name>
        <Department>Designer</Department>
      </div>
    </UserContainer>
  );
}

export default User;
