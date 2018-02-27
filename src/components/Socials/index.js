import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Container, Title, Wrapper } from './../Main/styled';
import { Header, Section, Image, Content } from './styled';

const content = [
  {
    name: 'Twitter',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'GitHub',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'Facebook',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'Facebook',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'Instagram',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'Reddit',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'BitcoinTalk',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'YouTube',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'BitcoinTalk',
    src: 'http://via.placeholder.com/300x300',
  },
  {
    name: 'YouTube',
    src: 'http://via.placeholder.com/300x300',
  },
];

export default class Socials extends React.Component {
  render() {
    return (
      <Wrapper white className='section_contact'>
        <Container>
          <Title violet>
            <T value="socials.title" dangerousHTML />
          </Title>
          <Content center='xs'>
            {content.map(
              (item) =>
              <Section xs={6} sm={2}>
                <Image src={item.src}/>
                <Header>{item.name}</Header>
              </Section>
            )}
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
