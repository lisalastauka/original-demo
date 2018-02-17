import styled from 'styled-components';
import media from '../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export const GoTo = styled.button`
  width: 100%;
  text-align: left;
  padding: 15px 34px;
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize.small};
  background: transparent;
  white-space: nowrap;
  ${props => props.white &&`
    color: white;
  `}
  ${media.tablet`
    width: auto;
    padding: 5px 10px;
  `}
`;

export const Container = styled(Col)`
  display: none;
  width: 100%;
  justify-content: left;
  padding: 0 25px;
  height: 50px;
  align-items: center;
  ${'' /* border-left: 1px solid ${props => props.theme.border.color}; */}
  flex-wrap: wrap;

  ${media.tablet`
    display: flex;
  `}
`;

export const SidebarContainer = styled.div`
  position: fixed;
  padding-top: 15px;
  top: 0;
  bottom: 0;
  left: -60%;
  width: 60%;
  background-color: white;
  transition: left 500ms;
  ${props => props.isOpen &&`
    left: 0;
  `}
`;
