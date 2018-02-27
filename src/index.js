import React from 'react';
import { Provider } from 'react-redux';
import { I18n } from 'react-i18nify';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { store } from './_config';

import './styled-components/global';
import * as translations from './constants/translations';
import App from './App';

if (!localStorage.language) {
 localStorage.language = 'en';
}

I18n.setLocale(localStorage.language);
I18n.setTranslations(translations);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
