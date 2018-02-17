import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';

export const Section = styled(Row)`
  color: white;
  text-align: left;
`;

export const Info = styled.img`
  width: 100%;
  ${props => props.desktop && `
    display: none;
  `}
  ${props => props.desktop && media.tablet`
    display: unset;
  `}
  ${props => props.phone && `
    display: unset;
    max-width: 400px;
  `}
  ${props => props.phone && media.tablet`
    display: none;
  `}
`;

export const Column = styled(Col)`
  padding: 0 30px 0 0;
  margin-bottom: 80px;
  ${props => props.text && `
    margin-bottom: 0;
  `}
  ${props => props.text && media.tablet`
    margin-bottom: 80px;
  `}
`;

export const Header = styled.div`
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.roboto.medium};
  margin: 0 auto 30px;
  text-transform: uppercase;
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.standard};
    margin-bottom: 30px;
  `}
  ${props => props.desktop && `
    display:none;
  `}
  ${props => props.desktop && media.tablet`
    display:block;
  `}
  ${props => props.nomargin && `
    margin-bottom: 5px;
  `}
  ${props => props.nomargin && media.tablet`
    margin-bottom: 5px;
  `}
  ${props => props.mobile && media.tablet`
    display: none;
  `}
`;

export const Content = styled.div`
  font-family: ${props => props.theme.fonts.roboto.light};
  font-size: ${props => props.theme.fontSize.regular};
  margin: 0 auto 27px;
  display: none;
  ${media.tablet`
    display: block;
    font-size: ${props => props.theme.fontSize.medium};
  `}
`;

export const Footer = styled.div`
  font-family: ${props => props.theme.fonts.roboto.light};
  font-size: ${props => props.theme.fontSize.smaller};
  margin: 0 auto 98px;
  display: none;
  ${media.tablet`
    display: block;
    font-size: ${props => props.theme.fontSize.small};
  `}
`;

export const Name = styled(Col)`
  text-align: right;
`;

export const Description = styled.div`
  font-family: ${props => props.theme.fonts.roboto.light};
  font-size: ${props => props.theme.fontSize.small};
  margin: 12px 0 10px;
  height: 26px;
  white-space: nowrap;
  ${props => props.invisible &&`
    visibility: hidden;
  `}
`;

export const Image = styled.img`
  border-radius: 25%;
  width: 100%;
  ${props => props.lg && `
    border-radius: 0;
  `}
`;

export const Subtitle = styled.div`
  font-family: ${props => props.theme.fonts.roboto.medium};
  font-size: ${props => props.theme.fontSize.regular};
  margin-bottom: 11px;
  ${media.tablet`
    font-size: ${props => props.theme.fontSize.medium};
  `}
  ${props => props.invisible &&`
    visibility: hidden;
  `}
`;

export const Value = styled(Col)`
  text-align: left;
  div {
    text-align: center;
    display: inline-block;
    height: 13px;
    ${media.tablet`
      height: 20px;
    `}
  }
`;
