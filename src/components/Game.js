import './Game.styl';
import React from 'react'
// import { browserHistory } from 'react-router'

import Score from './Score'
import Grid from './Grid'
import Status from './Status'

export default class Game extends React.Component {
	render () {
		return (
		<div className="Game">
			<Score />
			<Status />
			<Grid />
			<button type="button" className='btn-restart'>Restart</button>
		</div>
		)
	}
}