import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
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
`

export const Icon = styled.div`
  color: #C3C3C6;
  order: -1;
`
  
export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding: 2px 8px;
  caret-color: #6534ff;

  &::placeholder {
    font-weight: 500;
    color: #C3C3C6;
  }

  &:focus ~ ${Icon} {
    color: #050510;
  }
`