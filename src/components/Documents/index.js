import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Container, Title, Wrapper } from './../Main/styled';
import { Header, Section, Image, Content } from './styled';

export default class Documents extends React.Component {
  render() {
    return (
      <Wrapper violet className='section_documents'>
        <Container>
          <Title white dashed="violet">
            <T value="documents.title" dangerousHTML />
          </Title>
          <Content center='xs'>
            <Section xs={6} md={5} lg={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.whitePaper" dangerousHTML />{' '}
                <span style={{whiteSpace: 'nowrap'}}>( <a href='/White Paper OIN SPACE eng_v1.0.pdf' target="_blank" download>ENG</a>{' '}
                <a href='/White Paper OIN SPACE rus_v1.0.pdf' target="_blank" download>RUS</a> )</span>
              </Header>
            </Section>
            <Section xs={6} md={5} lg={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.presentation" dangerousHTML />{' '}
                <span style={{whiteSpace: 'nowrap'}}> ( <a href='/Presentation.pdf' target="_blank" download>RUS</a> ) </span>
              </Header>
            </Section>
            {/* <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.onePager" dangerousHTML />
              </Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.confidence" dangerousHTML />
              </Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.conditions" dangerousHTML />
              </Header>
            </Section>
            <Section xs={6} sm={4}>
              <Image src="/images/icons/doc_icon.svg"/>
              <Header white>
                <T value="documents.aggreement" dangerousHTML />
              </Header>
            </Section> */}
          </Content>
        </Container>
      </Wrapper>
    );
  }
}
