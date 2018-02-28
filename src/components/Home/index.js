import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Row, Col } from 'react-flexbox-grid';
import { Container, SubTitle } from './../Main/styled';
import Timer from './Timer';
import { Status, Title, Thoung, Content, Link, H1, ContainerThoung, Divider, HomeWrapper } from './styled';


export default () => (
  <HomeWrapper className='section_home'>
    <Container main>
      <H1>
        <T value="home.title" dangerousHTML />
      </H1>
      <SubTitle white main>
        <T value="home.description" dangerousHTML />
      </SubTitle>
    </Container>
    <Thoung>
      <Content>
        <ContainerThoung>
          <Status start='xs'>
            <Col xs={12} md={5} lg={4}>
              <Row>
                <Col xs={4} sm={5} md={8} lg={12}>
                  <Title purple>
                    <T value="home.status" dangerousHTML />
                  </Title>
                </Col>
                <Col xs={5} smOffset={1} mdOffset={0} md={12}>
                  <Divider />
                  <Link>
                    <T value="home.whitePaper" dangerousHTML />
                  </Link>
                </Col>
              </Row>
            </Col>
            {/*FIXME: Remove inline style*/}
            <Col style={{display: 'flex', flexDirection: 'column', margin: 'auto 0'}} xs={12} md={6} lg={5}>
              {/*FIXME: Remove inline style*/}
              <SubTitle style={{ marginBottom: '27px'}} violet>
                <T value="home.details" dangerousHTML />
              </SubTitle>
              <SubTitle purple>
                <T value="home.start" dangerousHTML />
              </SubTitle>
              <Timer />
            </Col>
          </Status>
        </ContainerThoung>
      </Content>
    </Thoung>
    <Container nopaddingtop>

      {/*NOTE: Uncomment when needed*/}
      {/* <LinkGroup between="xs"> <Link href='/WP.pdf'>{home.whitePaper}</Link>
        <Link href=''>{home.onePager}</Link>
          <Link href=''>{home.downloadApp}</Link>
        <Link href=''>{home.whiteList}</Link>     </LinkGroup>*/}

    </Container>
  </HomeWrapper>
)
