import styled from 'styled-components';
import media from '../../styled-components/media';

export const LogoTop = styled.img`
  width: 55px;
  ${media.tablet`
    width: 110px;
  `}
  ${props => props.small &&`
    width: 57px;
    height: 57px;
  `}
`;

export const LogoOin = styled.img`
  width: 2.3rem;
  margin-bottom: -1px;
  ${media.tablet`
    width: 3.7rem;
    margin-bottom: -2px;
  `}

  ${media.desktop`
    width: 5.6rem;
    margin-bottom: -3px;
  `}
`;

export const LogoInline = styled.img`
  width: 32px;
  ${media.desktop`
    width: 57px;
  `}
`;
