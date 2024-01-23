import Arrow from "../../components/svg/arrow-svg";
import PhoneSvg from "../../components/svg/phone-svg";
import StarSvg from "../../components/svg/start-svg";
import { Img, P } from "../../styled";
import { Avatar, BottomContainer, BtnBack, Position, InfoImg, InfoItem, InfoList, Name, Age, Phone, ProfileContainer, Tag, Top, TopContainer} from "./styles";
import { UserType } from '../../types';
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import ErrorPage from "../error-page/error-page";
import { AppRoute } from "../../const";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
require('dayjs/locale/ru');


function ProfilePage(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const {users} = useAppSelector((state) => state);
  
  const user: UserType | undefined = users.find((user) => user.id === params.id);

  if (!user) {
    return <ErrorPage />
  }

  const {avatarUrl, firstName, lastName, userTag, position, birthday, phone} = user;
  const userDate = dayjs(birthday).locale('ru').format('D MMMM YYYY');
  const userAge = dayjs(birthday).locale('ru').toNow(true);
  const phoneNumber = phone.replace(/[^0-9]/g,"");
  const tag = userTag.replace(/[^a-zа-я ]/ui,"").slice(0,2);

  const phoneMask = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)} ${phoneNumber.substring(7, 9)} ${phoneNumber.substring(9, 11)}`

  return (
    <main>
      <ProfileContainer>
        <Top>
          <TopContainer>
            <BtnBack onClick={() => navigate(AppRoute.Main)}>
              <Arrow />
            </BtnBack>
            <Avatar>
              <Img src={avatarUrl} width="72" height="72" />
            </Avatar>
            <div>
              <Name>{firstName} {lastName}<Tag>{tag}</Tag></Name>
              <Position>{position}</Position>
            </div>
          </TopContainer>
        </Top>
        <BottomContainer>
          <InfoList>
            <InfoItem>
            <InfoImg><StarSvg /></InfoImg>
              <P>{userDate}</P>
            </InfoItem>
            <InfoItem>
              <InfoImg><PhoneSvg /></InfoImg>
              <Phone href={`tel:+${phoneNumber}`}>{phoneMask}</Phone>
            </InfoItem>
          </InfoList>
          <Age>{userAge}</Age>
        </BottomContainer>
      </ProfileContainer>
    </main>
  );
}

export default ProfilePage;
