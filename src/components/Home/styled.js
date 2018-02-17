import styled from 'styled-components';
import media from '../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export const Title = styled.div`
  font-size: 30px;
  text-align: left;
  font-family: ${props => props.theme.fonts.avenir.medium}, sans-serif;
  line-height: 32px;
  color: white;
  letter-spacing: 1.5px;
  line-height: 38px;
  ${media.tablet`
    font-size: 48px;
    letter-spacing: 1.5px;
    line-height: 55px;
  `}
  ${media.desktop`
    font-size: 64px;
    letter-spacing: 1.5px;
    line-height: 72px;
  `}
  ${props => props.purple && `
    color: ${props.theme.colors.purple};
  `}
  ${props => props.main && `
    margin: 0 0 25px;
  `}
  ${props => props.main && media.tablet`
    margin: 35px 0 25px;
  `}
`;

export const H1 = styled.div`
  font-family: ${props => props.theme.fonts.avenir.regular}, sans-serif;
  font-size: ${props => props.theme.fontSize.titleSmall};
  text-align: left;
  color: white;
  margin: 0 0 25px;
  text-transform: uppercase;

  ${media.tablet`
    margin: 35px 0 25px;
    font-size: ${props => props.theme.fontSize.titleRegular};
  `}

  ${media.desktop`
    font-size: ${props => props.theme.fontSize.titleLarge};
  `}
`;

export const Status = styled(Row)`
  text-align: left;
`;

export const Thoung = styled.div`
  background-color: white;
  border-radius: 0 50px 50px 0;
  width: 90%;
  height: 260px;
  ${media.phone`
    width: 65%;
  `}
  ${media.tablet`
    width: 85%;
  `}
  ${media.giant`
    width: 70%;
  `}
`;

export const ContainerThoung = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  max-width: 1450px;
  padding: 25px;
  width: 90%;
  margin: 0;

  ${media.phone`
    width: 65%;
    margin: 0;
  `}
  ${media.tablet`
    padding: 25px 70px;
    width: 85%;
    margin: 0;
  `}
  ${media.desktop`
    margin: auto;
    width: 70%;
    padding: 25px 70px;
    width: 1450px;
  `}
`;

export const Divider = styled.div`
  display: none;
  content: '';
  max-width: 192px;
  height: 2px;
  margin: 20px 0 20px 5px;
  background: ${props => props.theme.colors.violet};
  ${media.tablet`
    display: block;
  `}
  ${media.desktop`
    margin: 30px 0 30px 5px;
  `}
`;

export const Content = styled.div`
  width: 100vw;
  height: 100%;
`;

export const LinkGroup = styled(Row)`
  margin: 30px 0 0;
  ${media.desktop`
    margin: 78px 0 0;
  `}
`;

export const Link = styled.a`
  flex-grow: 100;
  display: block;
  min-width: 128px;
  max-width: 192px;
  padding: 15px 10px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.roboto.light};
  white-space: nowrap;
  text-align: center;
  margin: 10px 5px;
  border-radius: 8px;
  ${media.desktop`
    max-width: 192px;
    height: 62px;
    padding: 20px 25px;
    font-size: 18px;
  `}
  :link {
    background: ${props => props.theme.colors.violet};
    color: white;
  }
  :visited {
    background: ${props => props.theme.colors.violet};
    color: white;
  }
  :hover {
    background: ${props => props.theme.colors.purple};
    color: white;
  }
  :active {
    background: white;
    color: ${props => props.theme.colors.violet};
  }
`;
