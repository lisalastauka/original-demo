import React from 'react';
import { Row } from 'react-flexbox-grid';
import { advisors } from '../../constants/people';
import { Translate as T } from 'react-i18nify';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default () => (
  <Wrapper white className='section_advisors'>
    <Container nopaddingbottom>
      <Title violet>
        <T value='advisors.title'/>
      </Title>
      <Row center='xs' between='sm'>
        {advisors.map((props) => (
          <PersonalCard key={props.id} type='advisors' {...props} />
        ))}
      </Row>
    </Container>
  </Wrapper>
);
