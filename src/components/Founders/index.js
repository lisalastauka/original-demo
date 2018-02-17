import React from 'react';
import { Row } from 'react-flexbox-grid';
import { founders } from './../../constants/texts';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default class Founders extends React.Component {
  render() {
    return (
      <Wrapper grey className='section_founders'>
        <Container>
          <Title violet>{founders.title}</Title>
          <Row center='xs' between='sm'>
            {founders.list.map((props) => (
              <PersonalCard {...props} grey/>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
