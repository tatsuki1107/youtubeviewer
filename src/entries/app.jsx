import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouting from '../routings/App';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppRouting />,
  rootEl,
);
