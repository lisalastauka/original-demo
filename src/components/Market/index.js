import React from 'react';
import { market } from './../../constants/texts';
import { Col, Row } from 'react-flexbox-grid';
import { Container, Title, Wrapper } from './../Main/styled';
import { isMobile } from './../../utils/helpers';
import { List } from './../Summary/styled';
import { Header, Content, Footer, Section, Value, Name, Subtitle, Image, Description, Column, Info } from './styled';

export default class Market extends React.Component {
  render() {
    return (
      <Wrapper purple className='section_market'>
        <Container>
          <Title dashed='purple' white dangerouslySetInnerHTML={{__html: market.title}}/>
          <Section between='xs'>
            <Column text="true" xs={12} md={6}>
              <Header dangerouslySetInnerHTML={{__html: market.infoBlock[0].header}} />
              <List cross>
                {market.infoBlock[0].list.map(item => <li key={item}>{item}</li>)}
              </List>
            </Column>
            <Column xs={12} md={6}>
              <Header desktop dangerouslySetInnerHTML={{__html: market.infoBlock[2].header}} />
              <Info desktop src='/images/horizontal.svg' />
              <Info phone src='/images/vertical.svg' />
            </Column>
            <Column text="true" xs={12} md={6}>
              <Header desktop dangerouslySetInnerHTML={{__html: market.infoBlock[1].header}} />
              <List cross>
                {market.infoBlock[1].list.map(item => <li key={item}>{item}</li>)}
              </List>
            </Column>
            <Column xs={12} md={6}>
              <Header mobile dangerouslySetInnerHTML={{__html: market.infoBlock[3].header}} />
              <Row style={{marginBottom: '30px'}} between='xs'>
                <Col xs={6} sm={3}>
                  <Description>Голограммы:</Description>
                  <Image src="/images/protection/1.png"/>
                </Col>
                <Col xs={6} sm={3}>
                  <Description invisible>Голограммы:</Description>
                  <Image src="/images/protection/2.png"/>
                </Col>
                <Col xs={6} sm={3}>
                  <Description>NFC/RFID метки:</Description>
                  <Image src="/images/protection/6.png"/>
                </Col>
                <Col xs={6} sm={3}>
                  <Description invisible>NFC/RFID метки:</Description>
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
                  <Description>RFID с физической<br/> защитой:</Description>
                  <Image lg src="/images/protection/1lg.png"/>
                </Col>
                <Col xs={12} sm={6}>
                  <Description>SCRATCH код:</Description>
                  <Image lg src="/images/protection/2lg.png"/>
                </Col>
              </Row>
            </Column>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}
