/* @flow */

import './Grid.styl'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'
import { onPlayerTurnComplete, gameOver } from './../../store/actions'
import { hasTheGameAWinner, isThereAnyPositionAvailable } from './../../utility-functions'
import type { TBoardPositions } from './../../types/index'

class Grid extends React.Component {
	static propTypes = {
		game: React.PropTypes.object.isRequired,
		onPlayerTurnComplete: React.PropTypes.func.isRequired,
		gameOver: React.PropTypes.func.isRequired
	}

	// LifeCycle
	componentWillReceiveProps(nextProps) {
		const { gameOver } = this.props
		const { boardPositions, turn, isGameOver } = nextProps.game

		if (isGameOver) {
			return
		}

		// Checking the status of the game
		const hasWinner = hasTheGameAWinner(boardPositions)
		const hasBoardPosition = isThereAnyPositionAvailable(boardPositions)
		const _isGameOver = !hasBoardPosition || hasWinner
		
		if (_isGameOver) {
			gameOver(turn, hasWinner)
		}
	}

	onBoardClick = (position: string) => {
		const { onPlayerTurnComplete, game } = this.props
		const { boardPositions, turn, isGameOver } = game

		// Checking if space is available
		if (isGameOver || boardPositions[position] !== null) {
			return
		}

		// Makes the move
		onPlayerTurnComplete(position, turn)		
	}

	// renders
	renderBoard(boardPositions: TBoardPositions) {
		// Checking if the board is ok
		if (isEmpty(boardPositions) || Object.keys(boardPositions).length % 3 !== 0) {
			return (
				<tr>
					<td colSpan="3">Oops something went wrong!</td>
				</tr>
			)
		}

		const rows = []
		let colums = []

		for (const position in boardPositions) {
			if (boardPositions.hasOwnProperty(position)) {
				const mark = boardPositions[position] || ''
				const className = mark ? `marked mark-${mark.toLowerCase()}` : ''

				colums.push(
					<td
						key={position}
						className={className}
						onClick={() => this.onBoardClick(position)}
					>
						{mark}
					</td>
				)

				if (colums.length === 3) {
					rows.push(<tr key={position}>{colums}</tr>)
					colums = []
				}
			}
		};

		return rows
	}

	render() {
		const { boardPositions, isGameOver } = this.props.game

		return (
			<div className={`Grid${isGameOver ? ' game-over' : ''}`}>
				<table>
					<tbody>
						{this.renderBoard(boardPositions)}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onPlayerTurnComplete,
		gameOver
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(Grid)