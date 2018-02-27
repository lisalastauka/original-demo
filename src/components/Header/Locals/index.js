import React from 'react';
import { I18n } from 'react-i18nify';
import { Container } from './styled';

export default class Locals extends React.Component {
  handleChange (e) {
    e.preventDefault();
    localStorage.language = e.target.value;
    I18n.setLocale(localStorage.language);
  }

  render() {
    return(
      <Container>
        <select defaultValue={localStorage.language} onChange={this.handleChange} style={{background: 'white'}}>
          <option value='en'>
            EN
          </option>
          <option value='ru'>
            RU
          </option>
        </select>
      </Container>
    );
  }
}
