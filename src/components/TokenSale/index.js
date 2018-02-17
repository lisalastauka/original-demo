import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { sale } from './../../constants/texts';
import { Header, Description, Section, Line, Blocks, Name, Sub, Key } from './styled';
import Payment from './Payment';
import Chart from './Chart';
import { Container, Wrapper, Title, SubTitle } from './../Main/styled';

const hard = '30,000 ​ETH';
const original = '15,000 ​ETH';
const soft = '5,000 ETH';
const token = 'ORIGINAL (OIN)';
const rate = '1 ​OIN = 0.0001 ETH';
const protocol = 'ERC-20';
const emission = '300 000 000 OIN';
const volume = '195 000 000 OIN';

export default class TokenSale extends React.Component {
  render() {
    const {chart, list} = sale;
    return (
      <Wrapper white className='section_tokenSale'>
        <Container>
          <Title marine>{sale.title()}</Title>
          <Blocks between='xs'>
            <Section xs={12} sm={6}>
              <Line>
                <Key>{sale.hardCap}</Key> : {hard}
              </Line>
              <Line>
                <Key>{sale.originalCap}</Key> : {original}
              </Line>
              <Line>
                <Key>{sale.softCap}</Key> : {soft}
              </Line>
              <Line>
                <Key>{sale.token}</Key> : {token}
              </Line>
            </Section>
            <Section xs={12} sm={6}>
              <Line>
                <Key>{sale.rate}</Key> : {rate}
              </Line>
              <Line>
                <Key>{sale.emission}</Key> : {emission}
              </Line>
              <Line>
                <Key>{sale.volume}</Key> : {volume}
              </Line>
              <Line>
                <Key>{sale.protocol}</Key> : {protocol}
              </Line>
            </Section>
          </Blocks>
          <Header marine>{sale.payment}:</Header>
          <Row start='xs'>
            <Payment name='ETH' src='/images/icons/eth.svg'/>
            <Payment name='BTC' src='/images/icons/btc.svg'/>
            <Payment name='Bank Transfer' src='/images/icons/bank.svg'/>
          </Row>
          <Header marine>{sale.allocation}:</Header>
          <Row between='xs'>
            <Section xs={6} md={4}>
              <Chart percentage={60}/>
              <Sub>{chart[0]}</Sub>
            </Section>
            <Section xs={6} md={4}>
              <Chart percentage={20}/>
              <Sub>{chart[1]}</Sub>
            </Section>
            <Section xs={6} md={4}>
              <Chart percentage={20}/>
              <Sub>{chart[2]}</Sub>
            </Section>
          </Row>
          <Row between='xs'>
            {list.map((item, i) => (
              <Section key={i} xs={12} sm={6} md={3}>
                <Header violet dangerouslySetInnerHTML={{__html: item.header }} />
                <Description  dangerouslySetInnerHTML={{__html: item.description }} />
              </Section>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
