import React from 'react';
import { Status, LinkGroup, Title, Thoung, Content, Link, H1, ContainerThoung, Divider } from './styled';
import { Container, Wrapper, SubTitle } from './../Main/styled';
import { home } from './../../constants/texts';
import Timer from './Timer';
import { Row, Col } from 'react-flexbox-grid';
import { Oin } from './../Logo';

export default class Home extends React.Component {
  render() {
    return(
      <Wrapper home className='section_home'>
        <Container main>
          <H1>
            <span>
              <span style={{whiteSpace : 'nowrap'}}>ПР<Oin />СТРАНСТВО</span>{' '}
              <span style={{whiteSpace : 'nowrap'}}>Д<Oin />ВЕРИЯ</span>{' '}
              <span style={{whiteSpace : 'nowrap'}}>ПОТРЕБИТЕЛЕЙ</span>
            </span>
          </H1>
          <SubTitle white main dangerouslySetInnerHTML={{__html: home.description}}/>
        </Container>
        <Thoung>
          <Content>
            <ContainerThoung>
              <Status start='xs'>
                <Col xs={12} md={5} lg={4}>
                  <Row>
                    <Col xs={4} sm={5} md={8} lg={12}>
                      <Title purple dangerouslySetInnerHTML={{__html: home.tokenSaleStatus}} />
                    </Col>
                    <Col xs={5} smOffset={1} mdOffset={0} md={12}>
                      <Divider />
                      <Link href='/WP.pdf' target="_blank">{home.whitePaper}</Link>
                    </Col>
                  </Row>
                </Col>
                <Col style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}} xs={12} md={6} lg={5}>
                  <SubTitle style={{ marginBottom: '27px'}} violet dangerouslySetInnerHTML={{__html: home.tokenSaleDetails}} />
                  <SubTitle purple>{home.tokenSaleStart}</SubTitle>
                  <Timer />
                </Col>
              </Status>
            </ContainerThoung>
          </Content>
        </Thoung>
        <Container nopaddingtop>



          {/* <LinkGroup between="xs"> <Link href='/WP.pdf'>{home.whitePaper}</Link>
            <Link href=''>{home.onePager}</Link>
              <Link href=''>{home.downloadApp}</Link>
            <Link href=''>{home.whiteList}</Link>     </LinkGroup>*/}

        </Container>
      </Wrapper>
    );
  }
}
