import './App.styl';
import React from 'react'

import Score from './Score'
import Grid from './Grid'
import Status from './Status'
// import { browserHistory } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Score />
        <button className='btn-restart'>Restart</button>
        <Grid />        
        <Status />
      </div>
    )
  }
}