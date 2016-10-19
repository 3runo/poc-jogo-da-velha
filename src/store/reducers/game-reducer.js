import { ACTIONS } from '../actions'

const initialState = {
	boardPositions: {
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
	},
	status: '',
	turn: 'X', // 'X'|'O'
	isGameOver: false
}

export default function gameReducerDefinition(state = initialState, action) {
	const { type, payload } = action

	if (payload === undefined) {
		return initialState
	}

	switch (type) {
		case ACTIONS.AFTER_PLAYER_TURN: {
			const turn = payload.turn
			const nextTurn = turn === 'X' ? 'O' : 'X'
			const boardPositions = Object.assign({}, state.boardPositions)
			// TODO: Create some variations of status message
			const status = `Player ${turn} did his move, Player ${nextTurn} is your turn`

			boardPositions[payload.position] = turn

			return { ...state, turn: nextTurn, boardPositions, status }
		}
		case ACTIONS.GAME_OVER: {
			const lastTurn = payload.turn === 'X' ? 'O' : 'X'
			// TODO: Create some variations of status message
			let status = `The winner is Player ${lastTurn}.`

			if (!payload.hasWinner) {
				status = 'Play again, let\'s untie this match'
			}

			return { ...state, isGameOver: true, status }
		}
		case ACTIONS.GAME_RESTART:
			return initialState
	}

	return state
}
