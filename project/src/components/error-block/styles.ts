import styled from 'styled-components';
import { P } from '../../styled';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 133px;
`

export const Title = styled(P)`
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  margin: 0 0 12px;
`

export const ErrorText = styled(P)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin: 0 0 12px;
  color: #97979B;
`

export const Button = styled.button`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #6534FF;
  cursor: pointer;
  transition: opacity 0.3s ease border-bottom 0.3s ease;

    &:hover,
    &:focus {
        opacity: 0.7;
        border-bottom: 1px solid #6534FF;
  }
`
  
export const ErrorImage = styled.div`
  width: 52px;
  height: 52px;
  margin-bottom: 8px;
`