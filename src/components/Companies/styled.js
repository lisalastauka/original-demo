import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Description = styled(SubTitle)`
  text-transform: none;
`;

export const Image = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 100%;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  ${media.tablet`
    width: 118px;
    height: 118px;
  `}
`;

export const Content = styled(Row)`
  margin-left: -10px;
  margin-right: -10px;
`;
