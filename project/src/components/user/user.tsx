import { Img } from "../../styled";
import { Avatar, Position, UserLink, Name, Tag, UserContainer, UserDate, Info } from "./styles";
import { UserType } from '../../types';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
require('dayjs/locale/ru');

type UserProps = {
  user: UserType;
  dateShow: boolean
}

function User({user, dateShow}:UserProps): JSX.Element {
  const navigate = useNavigate();
  const {id, avatarUrl, firstName, lastName, userTag, position, birthday} = user;
  const userBirthday = dayjs(birthday).locale('ru').format('D MMM');
  const tag = userTag.replace(/[^a-zа-я ]/ui,"").slice(0,2);

  return (
    <UserContainer>
      <UserLink onClick={() => navigate(`/user/${id}`)}></UserLink>
      <Avatar>
        <Img src={avatarUrl} width="72" height="72"/>
      </Avatar>
      <Info>
        <Name>{firstName} {lastName}<Tag>{tag}</Tag></Name>
        <Position>{position}</Position>
      </Info>
      <UserDate show={dateShow}>{userBirthday}</UserDate>
    </UserContainer>
  );
}

export default User;
