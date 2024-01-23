import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`
export const TabBtn = styled.button<{ active?: boolean }>`
  border: none;
  background-color: transparent;
  padding: 8px 12px 6px;
  color: ${(props) => (props.active ? "#050510" : "#97979B")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  border-bottom: ${(props) => (props.active ? "2px solid #6534FF" : "2px solid transparent")};
  font-size: 15px;
  line-height: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
  
  &:hover {
    color:#050510;
  }
`