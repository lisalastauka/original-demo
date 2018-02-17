import React from 'react';
import { Row } from 'react-flexbox-grid';
import { footer } from './../../constants/texts';
import { Container, Wrapper, SubTitle } from './../Main/styled';
import Navigation from './../Navigation';
import { Content, Header } from './styled';

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper purple>
        <Container>
          <Content>
            <Header white>
              © 2018 Oin
            </Header>
            {footer.map(text => <p>{text}</p>)}
            <Navigation white />
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
