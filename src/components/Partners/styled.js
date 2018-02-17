import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

import { Row, Col } from 'react-flexbox-grid';

export const Header = styled(SubTitle)`
  margin: 30px 0;
  text-transform: none;
`;

export const Description = styled.div`
  font-family: ${props => props.theme.fonts.roboto.light};
  font-size: ${props => props.theme.fontSize.smaller};
  letter-spacing: 0.1px;
  line-height: ${props => props.theme.lineHeight.smaller};
  margin-bottom: 25px;
  color: white;
  ${media.desktop`
    height: 90px;
    margin-bottom: 75px;
  `}
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.regular};
  `}
`;

export const Section = styled(Col)`
   padding-bottom: 50px;
  ${media.desktop`
    padding-bottom: 0;
  `}
  :last-child {
    padding-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
