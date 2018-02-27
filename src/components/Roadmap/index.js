import React from 'react';
import { Path, Section, Point, Image, Text, Description, Header, Arrow } from './styled';
import { Container, Wrapper, Title } from './../Main/styled';
import { Translate as T } from 'react-i18nify';

export default () => (
  <Wrapper white className='section_roadmap'>
    <Container>
      <Title dashed='white' marine>
        <T value="roadmap.title" dangerousHTML />
      </Title>
      <Section start='xs'>
        <Path right/>
        <Point xs={12} md={2}>
          <Image src="/images/icons/idea.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.0.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.0.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
        <Point xs={12} md={2}>
          <Arrow src="/images/icons/arrow.svg"/>
        </Point>
        <Point xs={12} md={2}>
          <Image src="/images/icons/hands.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.1.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.1.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
        <Point xs={12} md={2}>
          <Arrow src="/images/icons/arrow.svg"/>
        </Point>
        <Point xs={12} md={2}>
          <Image src="/images/icons/ico.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.2.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.2.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
      </Section>
      <Section inverse="true" start='xs'>
        <Path left="true"/>
        <Point xs={12} md={2}>
          <Image src="/images/icons/qr.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.3.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.3.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
        <Point xs={12} md={2}>
          <Arrow src="/images/icons/arrow.svg"/>
        </Point>
        <Point xs={12} md={2}>
          <Image src="/images/icons/fork.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.4.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.4.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
        <Point xs={12} md={2}>
          <Arrow src="/images/icons/arrow.svg"/>
        </Point>
        <Point xs={12} md={2}>
          <Image src="/images/icons/work.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.5.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.5.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
      </Section>
      <Section left="true" start='xs'>
        <Path mobileonly/>
        <Point mdOffset={1} xs={12} md={2}>
          <Image src="/images/icons/eco.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.6.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.6.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
        <Point xs={12} md={2}>
          <Arrow src="/images/icons/arrow.svg"/>
        </Point>
        <Point xs={12} md={2}>
          <Image src="/images/icons/global.svg"/>
          <Description>
            <Header>
              <T value="roadmap.point.7.title" dangerousHTML />
            </Header>
            <Text>
              <T value="roadmap.point.7.description" dangerousHTML />
            </Text>
          </Description>
        </Point>
      </Section>
    </Container>
  </Wrapper>
);
