import styled from 'styled-components';
import { A, Container, Ul } from '../../styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Top = styled.div`
  background-color: #F7F7F8;
`

export const TopContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 36px;
`

export const Avatar = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 24px;
`

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0 0 3px;
`

export const Tag = styled.span`
  font-size: 17px;
  line-height: 22px;
  margin: 0 0 0 4px;
  color: #97979B;
`

export const Department = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #55555C;
  margin: 0;
  text-align: center;
`
export const BtnBack = styled.button`
  position: absolute;
  top: 22px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  color: #050510;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #6534FF;
  }
`

export const BottomContainer = styled(Container)`
  display: flex;
  padding-top: 26px;
  padding-bottom: 36px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`

export const InfoList = styled(Ul)`
  flex: 1;
  margin-right: 20px;
`

export const InfoItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 48px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`

export const Phone = styled(A)`
  transition: color 0.3s ease;

  &:hover {
    color: #6534FF;
  }
`

export const Old = styled.div`
  color: #97979B;
`
