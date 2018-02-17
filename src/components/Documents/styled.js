import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Header = styled(SubTitle)`
  margin: 45px auto 0;
  height: 40px;
  text-align:center;
`;

export const Content = styled(Row)`
  margin-left: -10px;
  margin-right: -10px;
  ${media.tablet`
    margin-left: 100px;
    margin-right: 100px;
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

export const Section = styled(Col)`
   padding-bottom: 75px;
   padding-right: 10px;
   padding-left: 10px;
   ${media.tablet`
     padding-right: 40px;
     padding-left: 40px;
   `}
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50px;
  max-width: 300px;
`;
