import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { SubTitle } from './../../Main/styled';

export const Image = styled.img`
  height: 55px;
  border-radius: 100%;
`;

export const Name = styled(SubTitle)`
  margin: 15px;
  color: black;
  text-transform: none;
`;

export const Container = styled(Col)`
  margin-bottom: 40px;
`;

export const Block = styled(Row)`
  flex-wrap: nowrap;
`;
