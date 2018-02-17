import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 17px;
  color: ${props => props.theme.colors.marine};
  text-align: left;
  ${media.desktop`
    font-size: 18px;
  `}
`;

export const Name = styled(SubTitle)`
  margin-bottom: 23px;
  margin-top: 10px;
  ${media.desktop`
    margin-top: 0;
  `}
`;

export const Links = styled(Row)`
  img {
    padding-right: 8px;
    padding-left: 8px;
    height: 40px;
    margin-bottom: 7px;
  }
`;

export const PersonalCard = styled(Col)`
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  ${media.tablet`
    padding-bottom: 75px;
  `}

  img {
    width: auto;
    max-width: 100%;
  }

  a > img {
    padding-right: 8px;
    padding-left: 8px;
    width: auto;
    max-width: auto;
    height: 40px;
  }

  ul {
    list-style-type: none;
    padding-left: 10px;
    text-align: left;
    font-size: ${props => props.theme.fontSize.regular};
    font-family: ${props => props.theme.fonts.roboto.light};

    li {
      position: relative;
      list-style-type: none;
    }

    li:before {
      content: "-";
      position: absolute;
      left: -10px;
    }
  }
`;

export const Image = styled.img`
  border-radius: 100%;
  width: 100%;
  max-width: 250px;
`;

export const Link = styled.a`
  margin: 10px 0;
  border-radius: 100%;
  content: '';
`;

export const Company = styled.a`
  margin: 10px 0;
  border-radius: 100%;
  content: '';
`;
