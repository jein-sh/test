import styled from 'styled-components';

export const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px 0;
`

export const UsersItem = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const UsersSeparate = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0;
    padding: 24px;

   &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 24px;
    width: calc(100vw - 80px);
    max-width: 1200px;
    height: 1px;
    background-color: #C3C3C6;
    z-index: -1;
  }
`
export const UsersYear = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    background-color: #ffffff;
    color: #C3C3C6;
`