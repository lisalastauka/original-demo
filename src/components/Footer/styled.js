import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { SubTitle } from './../Main/styled';
import media from '../../styled-components/media';


export const Header = styled(SubTitle)`
  margin-bottom: 20px;
  text-transform: none;
`;

export const Content = styled.div`
  p {
    color: white;
    font-family: ${props => props.theme.fonts.roboto.light};
    font-size: 10px;
    text-align: left;
    margin: 20px 0;
    ${media.desktop`
      font-size: 14px;
    `}
  }
`;
