import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouting from '../routings/App';
import GlobalStyle from '../style/GlobalStyle';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <AppRouting />
  </>,
  rootEl,
);
