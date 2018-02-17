import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import theme from './theme';

export default injectGlobal`
  ${normalize()};

  html,
  body,
  h1,
  #root {
    font-family: ${theme.fonts.roboto.regular}, Roboto, sans-serif;
    font-display: swap;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    min-height: 100%;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.bg};
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  b {
    font-family: ${theme.fonts.roboto.bold};
  }

  small {
    font-size: ${theme.fontSize.regular};
  }

  a {
    color: ${theme.colors.purple};
    text-decoration: none;
    font-family: ${theme.fonts.roboto.light};
    transition: ${theme.transition};

    &:focus,
    &:hover {
      transition: ${theme.transition};
    }

    &:focus {
      opacity: ${props => props.theme.opacity.text07};
    }
  }

  h1 {
    font-family: ${theme.fonts.roboto.bold};
    font-size: ${theme.fontSize.extraLarge};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::-webkit-input-placeholder {
    font-weight: normal;
    ${'' /* font-family: ${theme.fonts.graphik.regular}; */}
  }

  ::-moz-placeholder {
    font-weight: normal;
    ${'' /* font-family: ${theme.fonts.graphik.regular}; */}
  }

  :-ms-input-placeholder {
    font-weight: normal;
    ${'' /* font-family: ${theme.fonts.graphik.regular}; */}
  }

  :-moz-placeholder {
    font-weight: normal;
    ${'' /* font-family: ${theme.fonts.graphik.regular}; */}
  }

    /* stylelint-disable */
    @font-face {
      font-family: ${theme.fonts.roboto.light};
      src: url('/fonts/roboto/Roboto-Light.ttf');
    }
    @font-face {
      font-family: ${theme.fonts.roboto.regular};
      src: url('/fonts/roboto/Roboto-Regular.ttf');
    }

    @font-face {
      font-family: ${theme.fonts.roboto.bold};
      src: url('/fonts/roboto/Roboto-Bold.ttf');
    }

    @font-face {
    font-family: ${theme.fonts.roboto.medium};
    src: url('/fonts/roboto/Roboto-Medium.ttf');
    }

    @font-face {
      font-family: ${theme.fonts.avenir.light};
      src: url('/fonts/avenir/AvenirNextCyr-Light.otf');
    }
    @font-face {
      font-family: ${theme.fonts.avenir.regular};
      src: url('/fonts/avenir/AvenirNextCyr-Regular.otf');
    }

    @font-face {
      font-family: ${theme.fonts.avenir.bold};
      src: url('/fonts/avenir/AvenirNextCyr-Bold.otf');
    }

    @font-face {
    font-family: ${theme.fonts.avenir.medium};
    src: url('/fonts/avenir/AvenirNextCyr-Medium.otf');
    }

  `;
