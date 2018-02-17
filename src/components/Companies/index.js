import React from 'react';
import { companies } from './../../constants/texts';
import { Section, Image, Description, Content } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class Companies extends React.Component {
  render() {
    return (
      <Wrapper marine className='section_companies'>
        <Container>
          <Title white dangerouslySetInnerHTML={{__html: companies.title}}/>
          <Description white>{companies.description}</Description>
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
