import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

import { Row, Col } from 'react-flexbox-grid';

export const Header = styled(SubTitle)`
  margin: 45px 0 20px;
  font-family: ${props => props.theme.fonts.roboto.medium};
  text-transform: uppercase;
`;

export const Key = styled.span`
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.roboto.regular};
  text-transform: uppercase;
  color: ${props => props.theme.colors.violet};
  ${media.desktop`
    font-size: ${props => props.theme.fontSize.standard};
  `}
`;

export const Description = styled(SubTitle)`
  margin-bottom: 25px;
  text-transform: none;
  ${media.desktop`
    height: 90px;
    margin-bottom: 75px;
  `}
`;

export const Sub = styled(SubTitle)`
  margin-bottom: 25px;
  text-transform: none;
  text-align: center;
  max-width: 275px;
  margin: 0 auto;
  ${media.desktop`
    height: 90px;
    margin-bottom: 75px;
  `}
`;

export const Section = styled(Col)`
  font-family: ${props => props.theme.fonts.roboto.light};
  p {
    text-align: left;
    font-size: ${props => props.theme.fontSize.smaller};
    ${media.desktop`
      font-size: ${props => props.theme.fontSize.regular};
    `}
  }
`;

export const Blocks = styled(Row)`
  margin-bottom: 75px;
  ${media.desktop`
    margin-bottom: 100px;
  `}
`;

export const Line = styled(SubTitle)`
  text-transform: none;
  span {
    color: ${props => props.theme.colors.violet};
  }
`;
