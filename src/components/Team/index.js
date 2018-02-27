import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { team } from '../../constants/people';
import { Container, Title, Wrapper } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default class Team extends React.Component {
  render() {
    return (
      <Wrapper white className='section_team'>
        <Container nopaddingbottom>
          <Title violet>
            <T value="team.title"/>
          </Title>
          <Row center='xs' between='sm'>
            {team.map((props) => (
              <PersonalCard key={props.id} type='team' {...props}/>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
