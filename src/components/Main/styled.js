import styled from 'styled-components';
import media from '../../styled-components/media';

export default styled.div`
  padding-top: 90px;
  ${media.desktop`
    padding-top: 154px;
  `}
`;

export const Title = styled.div`
  font-size: ${props => props.theme.fontSize.larger};
  font-family: ${props => props.theme.fonts.avenir.light}, sans-serif;
  text-align: center;
  margin: 0 auto 40px;
  word-break: break-word;
  text-transform: uppercase;
  width: fit-content;
  display: block;
  padding: 0;
  ${media.phone`
    padding: 5px 25px;
  `}

  ${props=> props.color && `
    color: ${props.color};
  `}

  ${props=> props.dashed && `
    border: 5px dashed white;
    ${props.dashed === 'white' &&`
      border: 5px dashed ${props.theme.colors.marine};
    `};
    position: relative;
    ::after {
      width: calc( 100% + 16px);
      height: calc( 100% - 10px);
      border-left: 10px solid white;
      border-right: 10px solid white;
      border-left: 10px solid ${props.theme.colors[props.dashed]};
      border-right: 10px solid ${props.theme.colors[props.dashed]};
      content: '';
      left: -8px;
      top: 5px;
      position: absolute;
    }
    ::before {
      top: -8px;
      height: calc( 100% + 16px );
      width: calc( 100% - 10px );
      margin: 0 auto;
      border-top: 10px solid white;
      border-bottom: 10px solid white;
      border-top: 10px solid ${props.theme.colors[props.dashed]};
      border-bottom: 10px solid ${props.theme.colors[props.dashed]};
      content: '';
      position: absolute;
      left: 5px;
    }
  `}
  ${props=> props.white && `
    color: white;
  `}
  ${props => props.violet &&`
    color: ${props.theme.colors.violet};
  `}
  ${props => props.marine && `
    color: ${props.theme.colors.marine};
  `}
  ${media.tablet`
    padding: 5px 50px;
  `}
  ${media.desktop`
    font-size: ${props => props.theme.fontSize.titleRegular};
    margin-bottom: 80px;
  `}
`;

export const Dashed = styled.div`
  border: 5px dashed ${props => props.theme.colors.marine};
  position: relative;
  margin-bottom: 40px;
  width: fit-content;
  ${media.desktop`
    margin-bottom: 75px;
  `}
  ${props => props.nomargin &&`
    margin-bottom: 0;
  `}
  ${props => props.nomargin && media.desktop`
    margin-bottom: 0;
  `}
  ::after {
    width: calc( 100% + 16px);
    height: calc( 100% - 10px);
    border-left: 10px solid white;
    border-right: 10px solid white;
    ${props => props.grey &&`
      border-left: 10px solid ${props.theme.colors.grey};
      border-right: 10px solid ${props.theme.colors.grey};
    `}
    content: '';
    left: -8px;
    top: 5px;
    position: absolute;
  }
  ::before {
    top: -8px;
    height: calc( 100% + 16px );
    width: calc( 100% - 10px );
    margin: 0 auto;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    ${props => props.grey &&`
      border-top: 10px solid ${props.theme.colors.grey};
      border-bottom: 10px solid ${props.theme.colors.grey};
    `}
    content: '';
    position: absolute;
    left: 5px;
  }
`;

export const SubTitle = styled.div`
  font-size: ${props => props.theme.fontSize.regular};
  letter-spacing: 0.1px;
  text-align: left;
  line-height: 19px;
  text-transform: uppercase;
  margin-bottom: 10px;
  ${media.desktop`
    font-size: ${props => props.theme.fontSize.medium};
  `}
  ${media.giant`
    font-size: ${props => props.theme.fontSize.standard};
  `}
  ${props => props.main &&`
    line-height: 22px;
  `}
  ${props => props.main && media.desktop`
    margin-bottom: 40px;
    line-height: 32px;
  `}
  ${props => props.white &&`
    color: white;
  `}
  ${props => props.violet &&`
    color: ${props.theme.colors.violet};
  `}
  ${props => props.purple && `
    color: ${props.theme.colors.purple};
  `}
  ${props => props.marine && `
    color: ${props.theme.colors.marine};
  `}
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.colors.violet};
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  ${props => props.background && `
    background: ${props.background};
  `}
  ${props => props.grey &&`
    background: #EBEBEB;
  `}
  ${props => props.white &&`
    background: white;
  `}
  ${props => props.marine && `
    background: ${props.theme.colors.marine};
  `}
  ${props => props.home && `
    background: url(/images/backgrounds/home-mobile.png) no-repeat 50%/contain ${props.theme.colors.marine};
  `}
  ${props => props.home && media.phone`
    background: url(/images/backgrounds/home-tablet.png) no-repeat 50%/contain ${props.theme.colors.marine};
  `}
  ${props => props.home && media.tablet`
    background: url(/images/backgrounds/home-desktop.png) no-repeat 50%/contain ${props.theme.colors.marine};
  `}
  ${props => props.home && media.desktop`
    background: url(/images/backgrounds/home-desktophd.png) no-repeat 50%/contain ${props.theme.colors.marine};
  `}
  ${props => props.home && media.giant`
    background: url(/images/backgrounds/home-desktophd.png) no-repeat 50%/contain ${props.theme.colors.marine};
  `}
  ${props => props.violet && `
    background: ${props.theme.colors.violet};
  `}
  ${props => props.purple && `
    background: ${props.theme.colors.purple};
  `}
`;

export const Container = styled.div`
  padding: 75px 25px;
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 1450px;
  margin: auto;

  ${media.tablet`
    padding: 100px 75px 120px;
  `}

  ${props => props.desktop &&`
    display: none;
  `}
  ${props => props.desktop && media.tablet`
    display: block;
  `}

  ${props => props.main && `
    padding: 25px;
    height: 100%;
  `}

  ${props => props.main && media.tablet `
    padding: 100px 70px 0;
    height: 100%;
  `}

  ${props => props.nopaddingbottom &&`
    padding: 100px 25px 0;
  `}

  ${props => props.nopaddingbottom && media.tablet`
    padding: 100px 70px 25px;
  `}

  ${props => props.nopaddingtop &&`
    padding: 0 25px 50px;
  `}

  ${props => props.nopaddingtop && media.tablet`
    padding: 25px 70px 120px;
  `}

  ${props => props.nopadding &&`
    padding: 25px;
  `}

  ${props => props.nopadding && media.tablet`
    padding: 25px 70px;
  `}

  ${'' /* ${media.tablet`
    padding: 100px 70px;
    max-width: 1450px;
    ${props => props.medium &&`
      padding: 50px 70px;
    `}
  `}
  ${props => props.medium &&`
    padding: 30px;
  `}
  ${props => props.background && `
    background: ${props.background};
  `} */}
`;
