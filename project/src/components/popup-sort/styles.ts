import styled from 'styled-components';

export const Popup = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(5, 5, 16, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  position: relative;
  width: 373px;
  height: 192px;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  padding: 18px;
  margin: 10px;
`

export const BtnClose = styled.button`
  position: absolute;
  top: 24px;
  right: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: #F7F7F8;
  color: #C3C3C6;
  cursor: pointer;
  transition: color 0.3s ease;


  &:hover,
  &:focus {
    color: #97979B;
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin: 6px 0 36px;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-left: 36px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
` 

export const RadioBtn = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);

  & + ${Label} {
    display: inline-flex;
    align-items: center;
    user-select: none;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -34px;
      width: 20px;
      height: 20px;
      outline: 2px solid #6534ff;
      outline-offset: -2px;
      background-color: #ffffff;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  &:checked +${Label} {
    &::before {
      outline: 6px solid #6534ff;
      outline-offset: -6px;
    }
  }
`