import React from 'react';
import { documents } from './../../constants/texts';
import { Header, Description, Section, Image, Content } from './styled';
import { Container, Title, Wrapper } from './../Main/styled';

export default class Documents extends React.Component {
  render() {
    return (
      <Wrapper violet className='section_documents'>
        <Container>
          <Title white dashed="violet">{documents.title}</Title>
          <Content center='xs'>
            <Section xs={6} sm={4}>
              <a href='/WP.pdf' target="_blank" download>
                <Image src="/images/icons/doc_icon.svg"/>
                <Header white>{documents.whitePaper}</Header>
              </a>
            </Section>
            <Section xs={6} sm={4}>
              <a href='/Presentation.pdf' target="_blank" download>
                <Image src="/images/icons/doc_icon.svg"/>
                <Header white>{documents.presentation}</Header>
              </a>
            </Section>
            {/* <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>{documents.onePager}</Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>{documents.confidence}</Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>{documents.conditions}</Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>{documents.aggreement}</Header>
            </Section> */}
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
