import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Description = styled.div`
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.roboto.light};
  margin-bottom: 25px;
  color: ${props => props.theme.colors.violet};
  text-align: left;
  ${media.desktop`
    font-size: ${props => props.theme.fontSize.medium};
    margin-bottom: 40px;
  `}
`;

export const Header = styled(SubTitle)`
  padding-bottom: 30px;
`;

export const List = styled.ul`
  list-style-type: none;
  vertical-align: middle;
  margin: 40px 0;
  padding-left: 30px;
  text-align: left;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.roboto.light};
  ${media.desktop`
    padding-left: 40px;
    font-size: ${props => props.theme.fontSize.medium};
  `}
  li {
    position: relative;
    list-style-type: none;
    margin: 10px 0;
  }
  li:before {
     content: "";
     position: absolute;
     top: 3px;
     left: -30px;
     width: 20px;
     height: 20px;
     background-image: url('/images/logos/Fill1.svg');
     }
`;

export const Container = styled(Row)`
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 1450px;
  margin: auto;

`;

export const Content = styled(Row)`
  margin-left: -25px;
  margin-right: -25px;
`;

export const Section = styled(Col)`
  padding: 75px 25px 0;
  border: none;
  ${media.tablet`
    padding: 120px 140px 0 80px;
  `}
  ${props => props.bordered && media.desktop `
    border-right: 1px solid ${props.theme.colors.violet};
    padding: 120px 30px 140px 110px;
  `}
  :last-child {
    padding-bottom: 0;
  }
`;

export const Image = styled.img`
  max-width: 680px;
  max-height: 660px;
  width: 100%;
  ${media.desktop`
    display: none;
  `}
  ${props => props.desktop && `
    display: none;
  `}
  ${props => props.desktop && media.desktop`
    display: unset;
  `}
`;
