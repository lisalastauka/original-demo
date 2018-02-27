import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Container, Wrapper, Title } from './../Main/styled';
import { Description, Play } from './styled';

export default () =>(
  {/*FIXME: Remove inline style*/}
  <Wrapper className='section_whatIs' background={`url(/images/backgrounds/video-desktophd.png) no-repeat 50%/cover`}>
    <Container>
      <Title main color='white'>
        <T value="whatIs.title" dangerousHTML />
      </Title>
      <Play/>
      <Description white>
        <T value="whatIs.description" dangerousHTML />
      </Description>
    </Container>
  </Wrapper>
);
