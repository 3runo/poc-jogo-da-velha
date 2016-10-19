import './Score.styl'
import React from 'react'

export default class Score extends React.Component {
	static propTypes = {
		score: React.PropTypes.object.isRequired
	}

  render() {
		const { playerX, playerO } = this.props.score

    return (
			<div className='Score'>
				<div className='player-left active'>
					<strong>Player X</strong>
					<div className='scoreboard'>{playerX}</div>
				</div>
				<div className='player-right'>
					<div className='scoreboard'>{playerO}</div>
					<strong>Player O</strong>
				</div>
			</div>
    )
  }
}