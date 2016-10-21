/* @flow */

import './Score.styl'
import React from 'react'

export default class Score extends React.Component {
	static propTypes = {
		score: React.PropTypes.object.isRequired,
		turn: React.PropTypes.string
	}

  render() {
		const { turn, score } = this.props
		const { playerX, playerO } = score

    return (
			<div className='Score'>
				<div className={`player-left${turn==='X' ? ' active' : ''}`}>
					<strong>Player X</strong>
					<div className="scoreboard">{playerX}</div>
				</div>
				<div className={`player-right${turn==='O' ? ' active' : ''}`}>
					<div className="scoreboard">{playerO}</div>
					<strong>Player O</strong>
				</div>
			</div>
    )
  }
}