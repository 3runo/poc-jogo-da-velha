import './Game.styl'
import React from 'react'
// import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { gameRestart } from './../store/actions/'

import Score from './Score'
import Grid from './Grid'
import Status from './Status'

class Game extends React.Component {
	static propTypes = {
		game: React.PropTypes.object.isRequired,
		score: React.PropTypes.object.isRequired,
		gameRestart: React.PropTypes.func.isRequired
	}

	render() {
		const { score, game, gameRestart } = this.props

		return (
			<div className="Game">
				<Score score={score} />
				<Status status={game.status} />
				<Grid game={game} />
				<button
					type="button"
					className="btn-restart"
					onClick={gameRestart}>Restart</button>
			</div>
		)
	}
}

// Redux helpers
function mapStateToProps(state) {
	return {
		game: state.game,
		score: state.score
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		gameRestart
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)