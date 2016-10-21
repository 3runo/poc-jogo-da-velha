/* @flow */

import './Score.styl'
import React from 'react'

export default class Score extends React.Component {
	static propTypes = {
		score: React.PropTypes.object.isRequired,
		turn: React.PropTypes.string,
		namePlayerX: React.PropTypes.string,
		namePlayerO: React.PropTypes.string
	}

  render() {
		const { turn, score, namePlayerX, namePlayerO } = this.props
		const { scorePlayerX, scorePlayerO } = score

    return (
			<div className='Score'>
				<div className={`player-left${turn==='X' ? ' active' : ''}`}>
					<strong>{namePlayerX}</strong>
					<div className="scoreboard">{scorePlayerX}</div>
				</div>
				<div className={`player-right${turn==='O' ? ' active' : ''}`}>
					<div className="scoreboard">{scorePlayerO}</div>
					<strong>{namePlayerO}</strong>
				</div>
			</div>
    )
  }
}