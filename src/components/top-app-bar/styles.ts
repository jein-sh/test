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
