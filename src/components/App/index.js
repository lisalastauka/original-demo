import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { app } from './../../constants/texts';
import { Header, Description,  Image, Content, Column } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class App extends React.Component {
  render() {
    return (
      <Wrapper marine className='section_app'>
        <Container>
          <Title dashed='marine' white>{app.title}</Title>
          <Row between='xs'>
            <Column xs={12} sm={6} lg={3}>
              <Image src="/images/app/Page1.svg"/>
              <Header>{app.request}</Header>
            </Column>
            <Column xs={12} sm={6} lg={3}>
              <Image src="/images/app/Page2.svg"/>
              <Header>{app.response}</Header>
            </Column>
            <Column desktop xs={12} sm={6} lg={3}>
              <Image src="/images/app/Page3.svg"/>
              <Header>{app.wallet}</Header>
            </Column>
            <Column desktop xs={12} sm={6} lg={3}>
              <Image src="/images/app/Page4.svg"/>
              <Header>{app.exchange}</Header>
            </Column>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
