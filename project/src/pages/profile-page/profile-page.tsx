import Arrow from "../../components/svg/arrow-svg";
import PhoneSvg from "../../components/svg/phone-svg";
import StarSvg from "../../components/svg/start-svg";
import { Img, P } from "../../styled";
import { Avatar, BottomContainer, BtnBack, Department, InfoImg, InfoItem, InfoList, Name, Old, Phone, ProfileContainer, Tag, Top, TopContainer} from "./styles";


function ProfilePage(): JSX.Element {
  return (
    <main>
      <ProfileContainer>
        <Top>
          <TopContainer>
            <BtnBack>
              <Arrow />
            </BtnBack>
            <Avatar>
              <Img src="img/avatar.png" width="72" height="72" />
            </Avatar>
            <div>
              <Name>Андрей Иванов<Tag>iv</Tag></Name>
              <Department>Designer</Department>
            </div>
          </TopContainer>
        </Top>
        <BottomContainer>
          <InfoList>
            <InfoItem>
            <InfoImg><StarSvg /></InfoImg>
              <P>5 июня 1996</P>
            </InfoItem>
            <InfoItem>
              <InfoImg><PhoneSvg /></InfoImg>
              <Phone href="tel:+79999009090">+7 (999) 900 90 90</Phone>
            </InfoItem>
          </InfoList>
          <Old>24 года</Old>
        </BottomContainer>
      </ProfileContainer>
    </main>
  );
}

export default ProfilePage;
