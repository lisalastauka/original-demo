import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';

export const Section = styled(Row)`
  color: white;
  text-align: left;
`;

export const Info = styled.div`
  img {
    width: 100%;
  }
  ${props => props.desktop && `
    img {
      display: none;
    }
  `}
  ${props => props.desktop && media.tablet`
    img {
      display: unset;
    }
  `}
  ${props => props.phone && `
    img {
      display: unset;
      max-width: 400px;
    }
  `}
  ${props => props.phone && media.tablet`
    img {
      display: none;
    }
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
