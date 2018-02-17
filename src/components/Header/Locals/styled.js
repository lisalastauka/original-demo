import styled from 'styled-components';
import media from '../../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export const Container = styled(Row)`
  padding-left: 25px;
  height: 50px;
  align-items: center;

  ${media.tablet`
    border-left: 1px solid ${props => props.theme.border.color}
  `}

  select {
    height: 15px;
    border: none;
  }
`;
