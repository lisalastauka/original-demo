import React from 'react';
import { Translate as T } from 'react-i18nify';
import { Col, Row } from 'react-flexbox-grid';
import { Logo } from './../Logo';
import Navigation from './../Navigation';
import { Sidebar } from './../Navigation';
import Locals from './Locals';
import { Container, Banner, NavBar, Line, Button } from './styled';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.close = this.close.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    })
  }

  close() {
    this.setState({
      open: false,
    })
  }

  render() {
    return(
      <Container>
        <Banner>
          <T value="banner.title"/>
        </Banner>
        <NavBar between="xs" middle="xs">
          {/* <Col>
            <Row> */}
              {/*FIXME: Remove inline style*/}
              <Logo style={{ padding: '0 25px 0 0'}} />
              <Col xs={0} md={8} lg={9}>
                <Navigation />
              </Col>
            {/* </Row>
          </Col>
          <Col>
            <Row> */}
            { /*  <Socials between="xs" middle="xs">
                <Telegram />
              </Socials>*/}
              <Sidebar open={this.state.open} closeTab={this.close} />
              <Col xs={5} sm={3} md={1}>
                <Row>
                  <Col xs
                    style={{ alignItems: 'center', display: 'flex',  justifyContent: 'right'}}>
                    <Locals />
                  </Col>
                  <Col xs style={{ alignItems: 'center', display: 'flex',  justifyContent: 'right'}}>
                    <Button onClick={this.toggleOpen}>
                      <Line />
                      <Line />
                      <Line />
                    </Button>
                  </Col>
                </Row>

              </Col>

            {/* </Row>
          </Col> */}
        </NavBar>
      </Container>
    );
  }
}
