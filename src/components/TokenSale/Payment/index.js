import React from 'react';
import { Image, Name, Container, Block } from './styled';

export default ({name, src}) => (
  <Container xs={6} md={2}>
    <Block start='xs' middle='xs'>
      <Image src={src}/>
      <Name>{name}</Name>
    </Block>
  </Container>
);
