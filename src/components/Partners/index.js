import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { Header, Description, Section, Image } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class Partners extends React.Component {
  render() {
    return (
      <Wrapper violet className='section_partners'>
        <Container>
          <Title white>
            <T value='partners.title'/>
          </Title>
          <Row start='xs'>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Image src="http://via.placeholder.com/350x250"/>
              <Header white>
                <T value='partners.header'/>
              </Header>
              <Description white>
                <T value='partners.description'/>
              </Description>
            </Section>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
