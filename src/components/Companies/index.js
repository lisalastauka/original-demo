import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Image, Description, Content } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class Companies extends React.Component {
  render() {
    return (
      <Wrapper marine className='section_companies'>
        <Container>
          <Title white>
            <T value='companies.title' dangerousHTML/>
          </Title>
          <Description white>
            <T value='companies.description'/>
          </Description>
          <Content around='xs'>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
            <Image src="http://via.placeholder.com/118x118"/>
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
