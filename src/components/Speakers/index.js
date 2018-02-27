import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { speakers } from '../../constants/people';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default () =>(
  <Wrapper white className='section_speakers'>
    <Container nopaddingbottom>
      <Title violet>
        <T value="speakers.title"/>
      </Title>
      <Row center='xs' between='sm'>
        {speakers.map((props) => (
          <PersonalCard key={props.id} type='speakers' {...props}/>
        ))}
      </Row>
    </Container>
  </Wrapper>
);
