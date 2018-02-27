import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { founders } from '../../constants/people';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default () => (
  <Wrapper grey className='section_founders'>
    <Container nopaddingbottom>
      <Title violet>
        <T value="founders.title"/>
      </Title>
      <Row center='xs' between='sm'>
        {founders.map((props) => (
          <PersonalCard key={props.id} type='founders' {...props} grey/>
        ))}
      </Row>
    </Container>
  </Wrapper>
);
