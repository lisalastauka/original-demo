import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { team } from './../../constants/texts';
import { Image, Description, Company, Name, Links } from './styled';
import { isMobile } from './../../utils/helpers';
import { Container, Title, Wrapper, Dashed } from './../Main/styled';
import PersonalCard from './../PersonalCard';

export default class Team extends React.Component {
  render() {
    return (
      <Wrapper white className='section_team'>
        <Container>
          <Title violet>{team.title}</Title>
          <Row center='xs' between='sm'>
            {team.list.map((props) => (
              <PersonalCard {...props} />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
