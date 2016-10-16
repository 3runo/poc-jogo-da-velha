import './Score.styl';
import React from 'react'
// import { browserHistory } from 'react-router'

export default class Score extends React.Component {
  render() {
    return (
			<div className='Score'>
				<div className='player-left active'>
					<strong>Player X</strong>
					<div className='scoreboard'>0</div>
				</div>
				<div className='player-right'>
					<div className='scoreboard'>0</div>
					<strong>Player O</strong>
				</div>
			</div>
    )
  }
}