import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { Title, Description, Section, Image } from './styled';
import { Container, Wrapper } from './../Main/styled';

export default class Promo extends React.Component {
  render() {
    return (
      <Wrapper white className='section_promo'>
        <Container nopaddingbottom>
          <Row between='xs'>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title>
                <T value="promo.team.title" dangerousHTML />
              </Title>
              <Description>
                <T value="promo.team.description" dangerousHTML />
              </Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title>
                <T value="promo.partners.title" dangerousHTML />
              </Title>
              <Description>
                <T value="promo.partners.description" dangerousHTML />
              </Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title>
                <T value="promo.interest.title" dangerousHTML />
              </Title>
              <Description>
                <T value="promo.interest.description" dangerousHTML />
              </Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
            <Section xs={12} sm={6} md={6} lg={3}>
              <Title>
                <T value="promo.market.title" dangerousHTML />
              </Title>
              <Description>
                <T value="promo.market.description" dangerousHTML />
              </Description>
              <Image src="http://via.placeholder.com/350x250"/>
            </Section>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
