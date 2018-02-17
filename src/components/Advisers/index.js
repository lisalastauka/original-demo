import React from 'react';
import { Row } from 'react-flexbox-grid';
import { advisers } from './../../constants/texts';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default class Advisers extends React.Component {
  render() {
    return (
      <Wrapper white className='section_advisers'>
        <Container>
          <Title violet>{advisers.title}</Title>
          <Row center='xs' between='sm'>
            {advisers.list.map((props) => (
                <PersonalCard {...props} />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
