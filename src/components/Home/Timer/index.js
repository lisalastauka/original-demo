import React from 'react';
import Countdown from 'react-countdown-now';
import { Digit, Name, Section, Container } from './styled';
import { Translate as T } from 'react-i18nify';

const Completionist = () => <h1>Pre Sale Started</h1>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {

    return <Completionist />;
  } else {

    return (
      <Container start="xs" middle="xs">
        <Section>
          <Digit>{days}</Digit>
          <Name violet>
            <T value="home.days" />
          </Name>
        </Section>
        <Section>
          <Digit>{hours}</Digit>
          <Name violet>
            <T value="home.hours" />
          </Name>
        </Section>
        <Section>
          <Digit>{minutes}</Digit>
          <Name violet>
            <T value="home.minutes" />
          </Name>
        </Section>
        <Section>
          <Digit>{seconds}</Digit>
          <Name violet>
            <T value="home.seconds" />
          </Name>
        </Section>
      </Container>
    );
  }
};
var dateString = "2018-03-08 00:00:00";
var d = new Date(dateString.replace(/-/g, '/'));

export default () => (
  <Countdown
    date={d}
    renderer={renderer}
  />
);
