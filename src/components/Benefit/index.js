import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { benefit } from './../../constants/texts';
import { Section, Image, Description, Header, Container, List} from './styled';
import { Wrapper, SubTitle } from './../Main/styled';

export default class Benefit extends React.Component {
  render() {
    return (
      <Wrapper nomargin white  className='section_benefit'>
        <Container>
          <Section bordered="true" xs={12} lg={6}>
            <SubTitle violet>{benefit.first.header}</SubTitle>
            <List>
              {benefit.first.points.map(point => <li key={point} dangerouslySetInnerHTML={{__html: point}} />)}
            </List>
            <Image src='/images/consumer_mobile.svg' />
          </Section>
          <Section xs={12} lg={6}>
            <SubTitle violet>{benefit.second.header}</SubTitle>
            <List>
              {benefit.second.points.map(point => <li key={point} dangerouslySetInnerHTML={{__html: point}} />)}
            </List>
            <Image src='/images/producer.svg' />
          </Section>
        </Container>
        <Container>
          <Section bordered="true" xs={12} lg={6}>
            <Image desktop src='/images/consumer.svg' />
          </Section>
          <Section xs={12} lg={6}>
            <Image desktop src='/images/producer.svg' />
          </Section>
        </Container>
      </Wrapper>
    );
  }
}
