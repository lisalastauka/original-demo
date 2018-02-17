import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { roadmap } from './../../constants/texts';
import { Path, Section, Point, Image, Text, Description, Header, Arrow } from './styled';
import { Container, Wrapper, Title } from './../Main/styled';

export default class RoadMap extends React.Component {
  render() {
    const {title, point} = roadmap;
    return (
      <Wrapper white className='section_roadmap'>
        <Container>
          <Title dashed='white' marine dangerouslySetInnerHTML={{__html: title}}/>
          <Section start='xs'>
            <Path right/>
            <Point xs={12} md={2}>
              <Image src="/images/icons/idea.svg"/>
              <Description>
                <Header>{point[0].title}</Header>
                <Text>{point[0].description}</Text>
              </Description>
            </Point>
            <Point xs={12} md={2}>
              <Arrow src="/images/icons/arrow.svg"/>
            </Point>
            <Point xs={12} md={2}>
              <Image src="/images/icons/hands.svg"/>
              <Description>
                <Header>{point[1].title}</Header>
                <Text>{point[1].description}</Text>
              </Description>
            </Point>
            <Point xs={12} md={2}>
              <Arrow src="/images/icons/arrow.svg"/>
            </Point>
            <Point xs={12} md={2}>
              <Image src="/images/icons/ico.svg"/>
              <Description>
                <Header>{point[2].title}</Header>
                <Text>{point[2].description}</Text>
              </Description>
            </Point>
          </Section>
          <Section inverse="true" start='xs'>
            <Path left="true"/>
            <Point xs={12} md={2}>
              <Image src="/images/icons/qr.svg"/>
              <Description>
                <Header>{point[3].title}</Header>
                <Text>{point[3].description}</Text>
              </Description>
            </Point>
            <Point xs={12} md={2}>
              <Arrow src="/images/icons/arrow.svg"/>
            </Point>
            <Point xs={12} md={2}>
              <Image src="/images/icons/fork.svg"/>
              <Description>
                <Header>{point[4].title}</Header>
                <Text>{point[4].description}</Text>
              </Description>
            </Point>
            <Point xs={12} md={2}>
              <Arrow src="/images/icons/arrow.svg"/>
            </Point>
            <Point xs={12} md={2}>
              <Image src="/images/icons/work.svg"/>
              <Description>
                <Header>{point[5].title}</Header>
                <Text>{point[5].description}</Text>
              </Description>
            </Point>
          </Section>
          <Section left="true" start='xs'>
            <Path mobileonly/>
            <Point mdOffset={1} xs={12} md={2}>
              <Image src="/images/icons/eco.svg"/>
              <Description>
                <Header>{point[6].title}</Header>
                <Text>{point[6].description}</Text>
              </Description>
            </Point>
            <Point xs={12} md={2}>
              <Arrow src="/images/icons/arrow.svg"/>
            </Point>
            <Point xs={12} md={2}>
              <Image src="/images/icons/global.svg"/>
              <Description>
                <Header>{point[7].title}</Header>
                <Text>{point[7].description}</Text>
              </Description>
            </Point>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}
