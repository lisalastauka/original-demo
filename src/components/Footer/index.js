import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Container, Wrapper } from './../Main/styled';
import Navigation from './../Navigation';
import { Content, Header } from './styled';

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper purple>
        <Container>
          <Content>
            <Header white>
              <T value="footer.title" dangerousHTML />
            </Header>
            <p><T value="footer.content.0" dangerousHTML /></p>
            <p><T value="footer.content.1" dangerousHTML /></p>
            <p><T value="footer.content.2" dangerousHTML /></p>
            <p><T value="footer.content.3" dangerousHTML /></p>
            <Navigation white />
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
