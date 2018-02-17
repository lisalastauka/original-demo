import React from 'react';
import { LogoTop, LogoOin, LogoInline } from './styled';

export const LogoSmall = (props) =>  (
  <LogoInline src='/images/logos/logotype.svg' />
);

export const Logo = (props) => (
  <LogoTop src='/images/logos/mainlogo.svg' />
);

export const Oin = (props) => (
  <LogoOin src="/images/logos/oin_white.svg" />
);

/* <LogoInline src='/images/logos/LogoInline.svg' />
<Logotype src='/images/logos/LogoInline.svg' />
<LogoWhite src='/images/logos/LogoInline.svg' /> */
