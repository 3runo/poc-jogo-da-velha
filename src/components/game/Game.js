import './Game.styl'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { scoreReset, gameRestart } from './../../store/actions'

import Score from './../score/Score'
import Grid from './../grid/Grid'
import Status from './../status/Status'

class Game extends React.Component {
	static propTypes = {
		game: React.PropTypes.object.isRequired,
		score: React.PropTypes.object.isRequired,
		scoreReset: React.PropTypes.func.isRequired,
		gameRestart: React.PropTypes.func.isRequired
	}

	render() {
		const { score, game, scoreReset, gameRestart } = this.props

		return (
			<div className="Game">
				<Score score={score} turn={game.turn} />
				<Grid game={game} />
				<Status status={game.status} />
				<div className="buttons-area">
					<button
						type="button"
						onClick={scoreReset}>Reset score</button>
					<button
						type="button"
						onClick={gameRestart}>Restart game</button>
				</div>
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
		scoreReset,
		gameRestart
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)