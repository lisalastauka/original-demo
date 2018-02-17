import styled from 'styled-components';
import media from '../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.navigation};
  background-color: white;
`;

export const Button = styled.div`
  ${media.tablet`
    display: none;
  `}
`;

export const Banner = styled.div`
  background-color: ${props => props.theme.colors.violet};
  padding: 10px 25px;
  width: 100%;
  font-size: ${props => props.theme.fontSize.regular};
  text-align: center;
  color: white;
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.medium};
    padding: 10px 70px;
  `}
`;

export const Socials = styled(Row)`
  display: flex;
  margin: 0 10px;
  min-width: 50px;
`;

export const NavBar = styled(Row)`
  width: 100%;
  max-height: 56px;
  max-width: 1450px;
  margin: auto;
  flex-wrap: nowrap;
  font-size: ${props => props.theme.fontSize.smaller};
  padding: 11px 25px;
  align-items: center;
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.regular};
    padding: 35px 70px;
    max-height: 114px;
  `}
`;

export const Line = styled.span`
  width: 1.5em;
  height: .25em;
  background-color: #333;
  display: block;
  margin: .25em auto;
`;
