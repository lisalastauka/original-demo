import React from 'react';
import { Container } from './styled';

export default class Locals extends React.Component {
  render() {
    return(
      <Container>
        <select>
          <option>EN</option>
          <option>RU</option>
        </select>
      </Container>
    );
  }
}
