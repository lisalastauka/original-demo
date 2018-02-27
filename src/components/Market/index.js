import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Container, Title, Wrapper } from './../Main/styled';
import { List } from './../Summary/styled';
import { Header, Section, Image, Description, Column, Info } from './styled';
import { Translate as T } from 'react-i18nify';

export default () => (
  <Wrapper purple className='section_market'>
    <Container>
      <Title white dashed='purple'>
        <T value="market.title" dangerousHTML />
      </Title>
      <Section between='xs'>
        <Column text="true" xs={12} md={6}>
          <Header>
            <T value="market.infoBlock.0.header" dangerousHTML />
          </Header>
          <List cross>
            <li><T value="market.infoBlock.0.list.0" dangerousHTML /></li>
            <li><T value="market.infoBlock.0.list.1" dangerousHTML /></li>
            <li><T value="market.infoBlock.0.list.2" dangerousHTML /></li>
            <li><T value="market.infoBlock.0.list.3" dangerousHTML /></li>
          </List>
        </Column>
        <Column xs={12} md={6}>
          <Header desktop>
            <T value="market.infoBlock.2.header" dangerousHTML />
          </Header>
          <Info desktop>
            <T value="market.img.horizontal" dangerousHTML />
          </Info>
          <Info phone>
            <T value="market.img.vertical" dangerousHTML />
          </Info>
        </Column>
        <Column text="true" xs={12} md={6}>
          <Header desktop>
            <T value="market.infoBlock.1.header" dangerousHTML />
          </Header>
          <List cross>
            <li><T value="market.infoBlock.1.list.0" dangerousHTML /></li>
            <li><T value="market.infoBlock.1.list.1" dangerousHTML /></li>
            <li><T value="market.infoBlock.1.list.2" dangerousHTML /></li>
            <li><T value="market.infoBlock.1.list.3" dangerousHTML /></li>
            <li><T value="market.infoBlock.1.list.4" dangerousHTML /></li>
          </List>
        </Column>
        <Column xs={12} md={6}>
          <Header mobile >
            <T value="market.infoBlock.3.header" dangerousHTML />
          </Header>
          <Row style={{marginBottom: '30px'}} between='xs'>
            <Col xs={6} sm={3}>
              <Description>
                <T value="market.infoBlock.3.protection.0" />
              </Description>
              <Image src="/images/protection/1.png"/>
            </Col>
            <Col xs={6} sm={3}>
              <Description invisible>
                <T value="market.infoBlock.3.protection.0" />
              </Description>
              <Image src="/images/protection/2.png"/>
            </Col>
            <Col xs={6} sm={3}>
              <Description>
                <T value="market.infoBlock.3.protection.1" />
              </Description>
              <Image src="/images/protection/6.png"/>
            </Col>
            <Col xs={6} sm={3}>
              <Description invisible>
                <T value="market.infoBlock.3.protection.1" />
              </Description>
              <Image src="/images/protection/8.png"/>
            </Col>
          </Row>
          {/* <Row style={{marginBottom: '30px'}} between='xs'>
            <Col xs={6} sm={3}>
              <Image src="/images/protection/5.png"/>
            </Col>
            <Col xs={6} sm={3}>
              <Image src="/images/protection/6.png"/>
              <Description>NFC Label</Description>
            </Col>
            <Col xs={6} sm={3}>
              <Image src="/images/protection/7.png"/>
              <Description>Double-frequency Label</Description>
            </Col>
            <Col xs={6} sm={3}>
              <Image src="/images/protection/8.png"/>
              <Description>Fragile Label</Description>
            </Col>
          </Row> */}
          <Row between='xs'>
            <Col xs={12} sm={6}>
              <Description>
                <T value="market.infoBlock.3.protection.2" dangerousHTML />
              </Description>
              <Image lg src="/images/protection/1lg.png"/>
            </Col>
            <Col xs={12} sm={6}>
              <Description>
                <T value="market.infoBlock.3.protection.3" />
              </Description>
              <Image lg src="/images/protection/2lg.png"/>
            </Col>
          </Row>
        </Column>
      </Section>
    </Container>
  </Wrapper>
);
