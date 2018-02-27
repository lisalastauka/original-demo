import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { Wrapper, SubTitle, Container, Title } from './../Main/styled';
import { Section, List} from './styled';

export default () => (
  <Wrapper violet className='section_summary'>
    <Container desktop>
      <Title dashed='violet' white>
        <T value="summary.title" dangerousHTML />
      </Title>
      <Row between='xs'>
        <Section xs={12} md={6}>
          <SubTitle white>
            <T value="summary.content.0.title" dangerousHTML />
          </SubTitle>
          <List>
            <li><T value="summary.content.0.list.0" dangerousHTML /></li>
            <li><T value="summary.content.0.list.1" dangerousHTML /></li>
            <li><T value="summary.content.0.list.2" dangerousHTML /></li>
            <li><T value="summary.content.0.list.3" dangerousHTML /></li>
            <li><T value="summary.content.0.list.4" dangerousHTML /></li>
          </List>
        </Section>
        <Section xs={12} md={6}>
          <SubTitle white>
            <T value="summary.content.1.title" dangerousHTML />
          </SubTitle>
          <List>
            <li><T value="summary.content.1.list.0" dangerousHTML /></li>
            <li><T value="summary.content.1.list.1" dangerousHTML /></li>
            <li><T value="summary.content.1.list.2" dangerousHTML /></li>
          </List>
        </Section>
      </Row>
      <Row>
        <Section nomargin='true' xs={12} md={6}>
          <SubTitle white>
            <T value="summary.content.2.title" dangerousHTML />
          </SubTitle>
          <List>
            <li><T value="summary.content.2.list.0" dangerousHTML /></li>
            <li><T value="summary.content.2.list.1" dangerousHTML /></li>
            <li><T value="summary.content.2.list.2" dangerousHTML /></li>
            <li><T value="summary.content.2.list.3" dangerousHTML /></li>
          </List>
        </Section>
        <Section nomargin='true' xs={12} md={6}>
          <SubTitle white>
            <T value="summary.content.3.title" dangerousHTML />
          </SubTitle>
          <List>
            <li><T value="summary.content.3.list.0" dangerousHTML /></li>
            <li><T value="summary.content.3.list.1" dangerousHTML /></li>
            <li><T value="summary.content.3.list.2" dangerousHTML /></li>
            <li><T value="summary.content.3.list.3" dangerousHTML /></li>
          </List>
        </Section>
      </Row>
    </Container>
  </Wrapper>
);
