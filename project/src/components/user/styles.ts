import styled from 'styled-components';
import { A, P } from '../../styled';

export const UserContainer = styled.article`
    position: relative;
    display: flex;
    align-items: center;
`

export const UserLink = styled(A)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const Info = styled.div`
  margin-right: auto;
`

export const Avatar = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
`
export const Name = styled(P)`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 3px;
`
export const Tag = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin: 0 0 0 4px;
    color: #97979B;
    text-transform: lowercase;
`
  
export const Position = styled(P)`
    font-size: 13px;
    line-height: 16px;
    color: #55555C;
`
  
export const UserDate = styled(P)<{show : boolean}>`
    display: ${(props) => (props.show ? "block" : "none")};
    margin-left: 10px;
    color: #55555C;
`