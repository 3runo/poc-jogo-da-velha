import { ACTIONS } from '../actions'

export const initialState = {
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
			const status = randomAfterPlayerTurnMessages(turn, nextTurn)

			boardPositions[payload.position] = turn

			return { ...state, turn: nextTurn, boardPositions, status }
		}
		case ACTIONS.GAME_OVER: {
			const lastTurn = payload.turn === 'X' ? 'O' : 'X'
			let status = randomGameOverMessages(lastTurn)

			if (!payload.hasWinner) {
				status = randomDrawMessages()
			}

			return { ...state, isGameOver: true, status }
		}
		case ACTIONS.GAME_RESTART:
			return initialState
	}

	return state
}

export function randomAfterPlayerTurnMessages(turn, nextTurn) {
	const messageList = [
		`Player ${turn} did his move, Player ${nextTurn} is your turn`,
		`Player ${nextTurn} turn`,
		`${nextTurn} turn`,
	]

	return messageList[Math.floor(Math.random()*messageList.length)]
}

export function randomGameOverMessages(lastTurn) {
	const messageList = [
		`The winner is Player ${lastTurn}.`,
		`Player ${lastTurn} won.`,
		`${lastTurn} Won.`,
		`${lastTurn} is the Winner.`,
	]

	return messageList[Math.floor(Math.random()*messageList.length)]
}

export function randomDrawMessages() {
	const messageList = [
		'Play again, let\'s untie this match',
		'Draw',
		'Nobody wins',
		'Nobody loses',
		'Nobody won',
		'no one loses',
	]

	return messageList[Math.floor(Math.random()*messageList.length)]
}