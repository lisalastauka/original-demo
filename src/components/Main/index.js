import React from 'react';
import Header from '../Header';
import Home from '../Home';
import Promo from '../Promo';
import WhatIs from '../WhatIs';
import HowItWorks from '../HowItWorks';
import Companies from '../Companies';
import Advisers from '../Advisers';
import Founders from '../Founders';
import Team from '../Team';
import Partners from '../Partners';
import TokenSale from '../TokenSale';
import Documents from '../Documents';
import Socials from '../Socials';
import Footer from '../Footer';
import Market from '../Market';
import Roadmap from '../Roadmap';
import Benefit from '../Benefit';
import App from '../App';
import Summary from '../Summary';
import Wrapper from './styled';
import { Divider } from './styled';

export default class Main extends React.Component {
  render() {
    return(
      <Wrapper>
        <Header />
        <Home />
        {/* <Promo /> */}
        {/* <WhatIs /> */}
        <HowItWorks />
        <Divider />
        <Benefit />
        <Market />
        <Roadmap />
        {/* <Companies /> */}
        <Founders />
        <Team />
        <Advisers />
        {/* <Partners /> */}
        <TokenSale />
        <Summary />
        <App />
        <Documents />
        {/* <Socials /> */}
        <Footer />
      </Wrapper>
    );
  }
}
