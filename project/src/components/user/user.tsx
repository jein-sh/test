import { Img } from "../../styled";
import { Avatar, Position, UserLink, Name, Tag, UserContainer } from "./styles";
import { UserType } from '../../types';
import { AppRoute } from "../../const";
import { useNavigate } from "react-router-dom";

type UserProps = {
  user: UserType;
}

function User({user}:UserProps): JSX.Element {
  const navigate = useNavigate();
  const {id, avatarUrl, firstName, lastName, userTag, position} = user;

  return (
    <UserContainer>
      <UserLink onClick={() => navigate(`/user/${id}`)}></UserLink>
      <Avatar>
        <Img src={avatarUrl} width="72" height="72"/>
      </Avatar>
      <div>
        <Name>{firstName} {lastName}<Tag>{userTag}</Tag></Name>
        <Position>{position}</Position>
      </div>
    </UserContainer>
  );
}

export default User;
