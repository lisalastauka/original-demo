import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Header = styled(SubTitle)`
  padding-bottom: 30px;
`;

export const List = styled.ul`
  list-style-type: none;
  color: white;
  padding-left: 40px;
  vertical-align: middle;
  text-align: left;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.roboto.light};
  ${props => props.cross &&`
    display: none;
  `};
  ${props => props.cross && media.tablet`
    display: block;
  `};
  ${media.desktop`
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
         left: -30px;
         width: 20px;
         height: 20px;
         background-image: url('/images/logos/oin_white.svg');
         ${props => props.cross &&`
           height: 19px;
           background-image: url('/images/logos/bullet.svg');
         `};
         ${media.tablet`
           top: 3px;
         `}
     }
`;

export const Section = styled(Col)`
  margin-bottom: 80px;
  ${props => props.nomargin && media.tablet`
    margin-bottom: 0;
  `}
  :last-child {
    padding-bottom: 0;
  }
`;
