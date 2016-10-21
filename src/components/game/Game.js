/* @flow */

import './Game.styl'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { scoreReset, gameRestart } from './../../store/actions'

import PlayerNames from './../player-names/PlayerNames'
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
			<div>
				<PlayerNames
					namePlayerX={game.namePlayerX}
					namePlayerO={game.namePlayerO}
				/>
				<div className="Game">
					<Score
						score={score}
						turn={game.turn}
						namePlayerX={game.namePlayerX}
						namePlayerO={game.namePlayerO}
					/>
					<Grid game={game} />
					<Status status={game.status} />
					<div className="buttons-area">
						<button
							type="button"
							className="reticent-button"
							onClick={scoreReset}>Reset score</button>
						<button
							type="button"
							className="reticent-button"
							onClick={gameRestart}>Restart game</button>
					</div>
				</div>
			</div>
		)
	}
}

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