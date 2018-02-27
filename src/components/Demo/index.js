import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { Header, Column } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

class Demo extends React.Component {
  render() {
    return (
      <Wrapper marine className='section_app'>
        <Container>
          <Title dashed='marine' white>
            <T value="app.title" dangerousHTML />
          </Title>
          <Row between='xs'>
            <Column xs={12} sm={6} lg={3}>
              <T value="app.img.page1" dangerousHTML />
              <Header>
                <T value="app.request" dangerousHTML />
              </Header>
            </Column>
            <Column xs={12} sm={6} lg={3}>
              <T value="app.img.page2" dangerousHTML />
              <Header>
                <T value="app.response" dangerousHTML />
              </Header>
            </Column>
            <Column desktop='true' xs={12} sm={6} lg={3}>
              <T value="app.img.page3" dangerousHTML />
              <Header>
                <T value="app.wallet" dangerousHTML />
              </Header>
            </Column>
            <Column desktop='true' xs={12} sm={6} lg={3}>
              <T value="app.img.page4" dangerousHTML />
              <Header>
                <T value="app.exchange" dangerousHTML />
              </Header>
            </Column>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Demo;
