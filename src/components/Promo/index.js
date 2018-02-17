import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { promo } from './../../constants/texts';
import { Title, Description, Section, Image } from './styled';
import { Container, Wrapper } from './../Main/styled';

export default class Promo extends React.Component {
  render() {
    return (
      <Wrapper white className='section_promo'>
        <Container nopaddingbottom>
          <Row between='xs'>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title dangerouslySetInnerHTML={{__html: promo.team.title}} />
              <Description>{promo.team.description}</Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title dangerouslySetInnerHTML={{__html: promo.partners.title}} />
              <Description>{promo.partners.description}</Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title dangerouslySetInnerHTML={{__html: promo.interest.title}} />
              <Description>{promo.interest.description}</Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title dangerouslySetInnerHTML={{__html: promo.market.title}} />
              <Description>{promo.market.description}</Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
