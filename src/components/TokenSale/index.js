import React from 'react';
import { Row } from 'react-flexbox-grid';
import { Translate as T } from 'react-i18nify';
import { LogoSmall } from './../Logo';
import Payment from './Payment';
import Chart from './Chart';

import { Container, Wrapper, Title } from './../Main/styled';
import { Header, Description, Section, Line, Blocks, Sub, Key } from './styled';


const hard = '30,000 ​ETH';
const original = '15,000 ​ETH';
const soft = '5,000 ETH';
const token = 'ORIGINAL (OIN)';
const rate = '1 ​OIN = 0.0001 ETH';
const protocol = 'ERC-20';
const emission = '300 000 000 OIN';
const volume = '195 000 000 OIN';

export default () => (
  <Wrapper white className='section_tokenSale'>
    <Container>
      <Title marine>
        {/*FIXME: Remove inline style*/}
        <div style={{display: 'flex',
          justifyContent: 'center', alignItems: 'center'}}>
          {/*FIXME: Remove inline style*/}
          <T style={{padding: '0 10px 0 0'}} value="sale.title.0" />
          <LogoSmall />
          {/*FIXME: Remove inline style*/}
          <T style={{padding: '0 0 0 10px', whiteSpace: 'nowrap'}} value="sale.title.1" />
        </div>
      </Title>
      <Blocks between='xs'>
        <Section xs={12} sm={6}>
          <Line>
            <Key><T value="sale.hardCap" /></Key> : {hard}
          </Line>
          <Line>
            <Key><T value="sale.originalCap" /></Key> : {original}
          </Line>
          <Line>
            <Key><T value="sale.softCap" /></Key> : {soft}
          </Line>
          <Line>
            <Key><T value="sale.token" /></Key> : {token}
          </Line>
        </Section>
        <Section xs={12} sm={6}>
          <Line>
            <Key><T value="sale.rate" /></Key> : {rate}
          </Line>
          <Line>
            <Key><T value="sale.emission" /></Key> : {emission}
          </Line>
          <Line>
            <Key><T value="sale.volume" /></Key> : {volume}
          </Line>
          <Line>
            <Key><T value="sale.protocol" /></Key> : {protocol}
          </Line>
        </Section>
      </Blocks>
      <Header marine><T value="sale.payment" />:</Header>
      <Row start='xs'>
        <Payment name='ETH' src='/images/icons/eth.svg'/>
        <Payment name='BTC' src='/images/icons/btc.svg'/>
        <Payment name='Bank Transfer' src='/images/icons/bank.svg'/>
      </Row>
      <Header marine><T value="sale.allocation" />:</Header>
      <Row between='xs'>
        <Section xs={6} md={4}>
          <Chart percentage={60}/>
          <Sub><T value="sale.chart.0" /></Sub>
        </Section>
        <Section xs={6} md={4}>
          <Chart percentage={20}/>
          <Sub><T value="sale.chart.1" /></Sub>
        </Section>
        <Section xs={6} md={4}>
          <Chart percentage={20}/>
          <Sub><T value="sale.chart.2" /></Sub>
        </Section>
      </Row>
      <Row between='xs'>
        <Section xs={12} sm={6} md={3}>
          <Header violet>
            <T value="sale.list.0.header" dangerousHTML />
          </Header>
          <Description>
            <T value="sale.list.0.description" dangerousHTML />
          </Description>
        </Section>
        <Section xs={12} sm={6} md={3}>
          <Header violet>
            <T value="sale.list.1.header" dangerousHTML />
          </Header>
          <Description>
            <T value="sale.list.1.description" dangerousHTML />
          </Description>
        </Section>
        <Section xs={12} sm={6} md={3}>
          <Header violet>
            <T value="sale.list.2.header" dangerousHTML />
          </Header>
          <Description>
            <T value="sale.list.2.description" dangerousHTML />
          </Description>
        </Section>
        <Section xs={12} sm={6} md={3}>
          <Header violet>
            <T value="sale.list.3.header" dangerousHTML />
          </Header>
          <Description>
            <T value="sale.list.3.description" dangerousHTML />
          </Description>
        </Section>
      </Row>
    </Container>
  </Wrapper>
);
