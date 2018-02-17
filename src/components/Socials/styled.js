import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

import { Row, Col } from 'react-flexbox-grid';

export const Header = styled(SubTitle)`
  margin: 20px auto 0;
  font-family: ${props => props.theme.fonts.roboto.light};
  text-align: center;
  text-transform: none;
  color: ${props => props.theme.colors.textColor};
`;

export const Content = styled(Row)`
  margin: 0 -12px;
  ${media.desktop`
    margin: 0 -70px;
  `}
`;

export const Section = styled(Col)`
   padding: 0 15px 50px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100px;
  border-radius: 20px;
`;
