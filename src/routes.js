import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoverPage from './components/CoverPage'
import MainPage from './components/MainPage'
import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CoverPage} />
    <Route path="home" component={CoverPage} />
    <Route path="main" component={MainPage} />
  </Route>
)
