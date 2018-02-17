import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styled-components/global';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
