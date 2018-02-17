import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Banner, NavBar, Socials, Line, Button } from './styled';
import { Telegram } from './../Icons';
import texts from './../../constants/texts';
import { Logo } from './../Logo';
import Navigation from './../Navigation';
import { Sidebar } from './../Navigation';
import Locals from './Locals';

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
          {texts.bannerTitle}
        </Banner>
        <NavBar between="xs" middle="xs">
          {/* <Col>
            <Row> */}
              <Logo style={{ padding: '0 25px 0 0'}} />
              <Navigation />
            {/* </Row>
          </Col>
          <Col>
            <Row> */}
            { /*  <Socials between="xs" middle="xs">
                <Telegram />
              </Socials> */}
            {/*  <Locals /> */}
              <Sidebar open={this.state.open} closeTab={this.close} />
              <Button onClick={this.toggleOpen}>
                <Line />
                <Line />
                <Line />
              </Button>
            {/* </Row>
          </Col> */}
        </NavBar>
      </Container>
    );
  }
}
