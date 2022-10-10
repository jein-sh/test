import styled from 'styled-components';

export const TopBar = styled.header`
    display: flex;
    flex-direction: column;
    border-bottom: 0.6px solid #C3C3C6;
`

export const Title = styled.h1`
    margin: 8px 0 18px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: #F7F7F8;
    border-radius: 16px;
    padding: 8px 12px;
    margin-bottom: 16px;
`

export const SortBtn = styled.button<{ active?: boolean }>`
    margin-left: auto;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => (props.active ? "#6534FF" : "#C3C3C6")};
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: ${(props) => (props.active ? "#C3C3C6" : "#6534FF")};
    }
`

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