import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { summary } from './../../constants/texts';
import { Section, Header, List} from './styled';
import { Wrapper, SubTitle, Container, Title } from './../Main/styled';

export default class Summary extends React.Component {
  render() {
    const {content, title} = summary;
    return (
      <Wrapper violet className='section_summary'>
        <Container desktop>
          <Title dashed='violet' white>{title}</Title>
          <Row between='xs'>
            <Section xs={12} md={6}>
              <SubTitle white>{content[0].title}</SubTitle>
              <List>
                {content[0].list.map(item => <li>{item}</li>)}
              </List>
            </Section>
            <Section xs={12} md={6}>
              <SubTitle white>{content[1].title}</SubTitle>
              <List>
                {content[1].list.map(item => <li>{item}</li>)}
              </List>
            </Section>
          </Row>
          <Row>
            <Section nomargin xs={12} md={6}>
              <SubTitle white>{content[2].title}</SubTitle>
              <List>
                {content[2].list.map(item => <li>{item}</li>)}
              </List>
            </Section>
            <Section nomargin xs={12} md={6}>
              <SubTitle white>{content[3].title}</SubTitle>
              <List>
                {content[3].list.map(item => <li>{item}</li>)}
              </List>
            </Section>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
