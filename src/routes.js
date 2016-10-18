import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/Home'
import Game from './components/Game'
import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="game" component={Game} />
  </Route>
)
