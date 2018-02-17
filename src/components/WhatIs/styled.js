import styled from 'styled-components';
import media from '../../styled-components/media';
import { SubTitle } from './../Main/styled';

export const Description = styled(SubTitle)`
  margin: 0 auto;
  max-width: 660px;
  line-height: 20px;
  text-align: center;
  ${media.tablet`
    line-height: 36px;
  `}
`;

export const Play = styled.button`
  height: 122px;
  width: 122px;
  border: 10px solid  #fff;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  margin: 0 auto 50px;
  transition: all .3s;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 39px;
    border-left: 38px solid  #fff;
    border-top: 28px solid transparent;
    border-bottom: 28px solid transparent;
  }
  :hover {
    transform: scale(.88);
  }
`;
