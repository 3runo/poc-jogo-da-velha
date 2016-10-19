import './Grid.styl'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'
import { onPlayerTurnComplete, gameOver } from './../store/actions/'

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

	renderBoard(boardPositions) {
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
				colums.push(
					<td key={position} onClick={() => this.onBoardClick(position)}>
						{boardPositions[position] || ''}
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

	onBoardClick = (position) => {
		const { onPlayerTurnComplete, game } = this.props
		const { boardPositions, turn } = game

		// Checking if space is available
		if (boardPositions[position] !== null) {
			return
		}

		// Makes the move
		onPlayerTurnComplete(position, turn)
	};

	render() {
		const { boardPositions } = this.props.game

		return (
			<div className='Grid'>
				<table>
					<tbody>
						{this.renderBoard(boardPositions)}
					</tbody>
				</table>
			</div>
		)
	}
}

// Game helpers
function hasTheGameAWinner(boardPositions) {
	const regexp = /^(...)*(X|O)\2\2|(X|O)..\3..\3|(X|O)(...\4){2}|^..(X|O).\6.\6/
	const stringPositions = boardPositionsToStringFormat(boardPositions)

	return !!stringPositions.match(regexp)
}

function isThereAnyPositionAvailable(boardPositions) {
	const stringPositions = boardPositionsToStringFormat(boardPositions)

	return stringPositions.indexOf('-') !== -1
}

function boardPositionsToStringFormat(boardPositions) {
	let output = ''

	for (const position in boardPositions) {
		if (boardPositions.hasOwnProperty(position)) {
			const mark = boardPositions[position]
			output += !mark ? '-' : mark
		}
	}

	return output
}

// Redux helpers
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onPlayerTurnComplete,
		gameOver
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(Grid)