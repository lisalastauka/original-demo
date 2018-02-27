import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
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
  margin-bottom: 20px;
  margin-top: 10px;
  ${media.desktop`
    margin-top: 0;
  `}
`;

export const Image = styled.img`
  border-radius: 100%;
  padding: 5px;
  width: 100%;
  max-width: 250px;
`;

export const PersonalCard = styled(Col)`
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;

  ${media.phone`
    padding-bottom: 25px;
  `}

  ${media.tablet`
    padding-bottom: 75px;
  `}

  img {
    width: auto;
    max-width: 100%;
  }

  a > img {
    margin-top: 5px;
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
