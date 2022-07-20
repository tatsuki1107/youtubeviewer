import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '../components/TopPage';
import PlayerPage from '../components/PlayerPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact title="トップ" component={TopPage} />
      <Route path="/play/:videoId" title="動画再生" component={PlayerPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;
