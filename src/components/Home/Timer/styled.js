import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import media from '../../../styled-components/media';
import { SubTitle } from './../../Main/styled';

export const Container = styled(Row)`
  margin: 0;
  flex-wrap: nowrap;
  ${media.tablet`
    margin-top: 20px;
  `}
`;

export const Section = styled.div`
  margin-right: 12px;
  ${media.desktop`
    margin-right: 22px;
  `}
`;

export const Digit = styled.div`
  font-size: 30px;
  text-align: center;
  color: ${props => props.theme.colors.violet};
  ${media.desktop`
    font-size: 48px;
  `}
`;

export const Name = styled(SubTitle)`
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.small};
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.medium};
  `}
  ${media.desktop`
    font-size: ${props => props.theme.fontSize.default};
  `}
  ${media.giant`
    font-size: ${props => props.theme.fontSize.standard};
  `}
`;
