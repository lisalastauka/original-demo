import React from 'react';
import { Description, Play } from './styled';
import { Container, Wrapper, Title } from './../Main/styled';
import { whatIs } from './../../constants/texts';

export default class WhatIs extends React.Component {
  render() {
    return(
      <Wrapper className='section_whatIs' background={`url(/images/backgrounds/video-desktophd.png) no-repeat 50%/cover`}>
        <Container>
          <Title main color='white'>{whatIs.title}</Title>
          <Play/>
          <Description white dangerouslySetInnerHTML={{__html: whatIs.description}}/>
        </Container>
      </Wrapper>
    );
  }
}
