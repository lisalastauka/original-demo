import React from 'react';
import { Section, Container, List} from './styled';
import { Wrapper, SubTitle } from './../Main/styled';
import { Translate as T } from 'react-i18nify';

export default () => (
  <Wrapper nomargin white className='section_benefit'>
    <Container>
      <Section bordered="true" xs={12} lg={6}>
        <SubTitle violet>
          <T value="benefit.consumer.header" />
        </SubTitle>
        <List>
          <li><T value="benefit.consumer.points.0" dangerousHTML /></li>
          <li><T value="benefit.consumer.points.1" dangerousHTML /></li>
          <li><T value="benefit.consumer.points.2" dangerousHTML /></li>
        </List>
        <T value="benefit.img.consumer_mobile" dangerousHTML/>
      </Section>
      <Section xs={12} lg={6}>
        <SubTitle violet>
          <T value="benefit.producer.header" />
        </SubTitle>
        <List>
          <li><T value="benefit.producer.points.0" dangerousHTML /></li>
          <li><T value="benefit.producer.points.1" dangerousHTML /></li>
          <li><T value="benefit.producer.points.2" dangerousHTML /></li>
          <li><T value="benefit.producer.points.3" dangerousHTML /></li>
          <li><T value="benefit.producer.points.4" dangerousHTML /></li>
        </List>
        <T value="benefit.img.producer" dangerousHTML />
      </Section>
    </Container>
    <Container>
      <Section desktop="true" bordered="true" xs={12} lg={6}>
        <T value="benefit.img.consumer" dangerousHTML />
      </Section>
      <Section desktop="true" xs={12} lg={6}>
        <T value="benefit.img.producer" dangerousHTML />
      </Section>
    </Container>
  </Wrapper>
);
