import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { partners } from './../../constants/texts';
import { Header, Description, Section, Image } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class Partners extends React.Component {
  render() {
    return (
      <Wrapper violet className='section_partners'>
        <Container>
          <Title white>{partners.title}</Title>
          <Row start='xs'>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>{partners.header}</Header>
              <Description white>{partners.description}</Description>
            </Section>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
