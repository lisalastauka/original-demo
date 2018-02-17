import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

import { Row, Col } from 'react-flexbox-grid';

export const Title = styled(SubTitle)`
  margin-bottom: 10px;
  ${media.desktop`
    height: 50px;
    margin-bottom: 30px;
  `}
`;

export const Description = styled(SubTitle)`
  margin-bottom: 25px;
  font-family: ${props => props.theme.fonts.roboto.light};
  ${media.phone`
    height: 60px;
  `}
  ${media.tablet`
    height: 80px;
  `}
  ${media.desktop`
    margin-bottom: 75px;
  `}
`;

export const Section = styled(Col)`
   padding-bottom: 75px;
`;

export const Image = styled.img`
  width: 100%;
`;
