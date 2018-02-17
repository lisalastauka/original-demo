import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Point = styled(Col)`
  width: 400px;
  z-index: 1;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    height: 200px;
  `}
`;

export const Section = styled(Row)`
  position: relative;
  justify-content: center;
  ${media.tablet`
    padding-top: 30px;
  `}
  ${props => props.inverse && media.tablet`
    flex-direction: row-reverse;
    ${Arrow} {
      transform: rotate(180deg);
    }
  `}
  ${props => props.left && media.tablet`
    justify-content: flex-start;
  `}
`;

export const Header = styled(SubTitle)`
  margin-bottom: 0;
`;

export const Arrow = styled.img`
   width: 70px;
   height: 14px;
   margin: 25px auto;
   display: none;
   ${media.tablet`
     display: unset;
   `}
`;

export const Description = styled.div`
  margin: 0 0 0 15px;
  ${media.tablet`
    margin: 0 auto;
    text-align: center;
  `}

  ${SubTitle} {
    ${media.tablet`
      text-align: center;
    `}
  }
`;

export const Text = styled.div`
  font-size: 12px;
  font-family: ${props => props.theme.fonts.roboto.light};
  margin: 0 auto;
  ${media.tablet`
    font-size: 14px;
    margin: 0 -40px;
  `}
`;

export const Image = styled.img`
  border-radius: 15px;
  background: white;
  border: 2px solid ${props => props.theme.colors.marine};
  padding: 13px;
  width: 71px;
  height: 71px;
  ${media.tablet`
    border-width: 3px;
    margin: 0 auto 20px;
    padding: 16px;
    width: 106px;
    height: 106px;
  `}
`;

export const Path = styled.div`
  top: 60px;
  position: absolute;
  height: 110%;
  width: 2px;
  left: 42px;
  background: ${props => props.theme.colors.violet};
  ${media.tablet`
    height: 232px;
    width: unset;
    top: 80px;
    background: transparent;
    border-radius: 83px;
    border: 2px solid ${props => props.theme.colors.violet};
  `}
  ${props => props.mobileonly && `
    height: 50px;
  `}
  ${props => props.mobileonly && media.tablet`
    display: none;
  `}
  ${props => props.left && media.tablet`
    left: 0;
    right: 50%;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
  ${props => props.right && media.tablet`
    right: 0;
    left: 20%;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}
`;
