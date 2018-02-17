import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';
import { Row, Col } from 'react-flexbox-grid';

export const Header = styled(SubTitle)`
  margin: 0 auto 45pxd;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: white;
`;

export const Content = styled(Row)`
  margin-left: -10px;
  margin-right: -10px;
  ${media.desktop`
    margin-left: -40px;
    margin-right: -40px;
  `}
`;

export const Column = styled(Col)`
  ${props => props.desktop &&`
    display: none;
  `}
  ${props => props.desktop && media.tablet`
    display: block;
  `}
`;

export const Description = styled(SubTitle)`
  margin-bottom: 25px;
  color: #818080;
  ${media.desktop`
    margin-bottom: 75px;
    height: 90px;
  `}
`;


export const Image = styled.img`
  width: 100%;
  border-radius: 50px;
  margin: -20px -20px 0;
`;
