import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import { Digit, Name, Section, Container } from './styled';

// Random component
const Completionist = () => <h1></h1>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Container start="xs" middle="xs">
        <Section>
          <Digit>{days}</Digit>
          <Name violet>ДНЕЙ</Name>
        </Section>
        <Section>
          <Digit>{hours}</Digit>
          <Name violet>ЧАСОВ</Name>
        </Section>
        <Section>
          <Digit>{minutes}</Digit>
          <Name violet>МИНУТ</Name>
        </Section>
        <Section>
          <Digit>{seconds}</Digit>
          <Name violet>СЕКУНД</Name>
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
