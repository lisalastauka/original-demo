import styled from 'styled-components';
import media from '../../styled-components/media';

export const Platform = styled.div`
  img {
    height: auto;
    width: auto;
    max-width: 100%;
    ${props => props.mobile && media.tablet`
      display: none;
    `}
    ${props => props.desktop &&`
      display: none;
    `}
    ${props => props.desktop && media.tablet`
      display: unset;
    `}
  }
`;

export const Box = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    flex-direction: row;
  `}
`
export const Left = styled.span`
  ${media.tablet`
    padding: 0 10px 0 0;
  `}
`
export const Right = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.violet};
  white-space: nowrap;
  ${media.tablet`
    padding: 0 0 0 10px;
  `}

  img {
    margin-right: 10px;
  }
`
