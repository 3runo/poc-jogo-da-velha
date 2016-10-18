import './Score.styl';
import React from 'react'
// import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

class Score extends React.Component {
  render() {
		const { playerX, playerO } = this.props.score;

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

function mapStateToProps(state) {
	return { score: state.score }
}

export default connect(mapStateToProps)(Score)