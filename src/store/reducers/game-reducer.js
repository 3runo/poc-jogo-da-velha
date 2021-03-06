import { ACTIONS } from '../actions'

export const initialState = {
	namePlayerX: 'Player X',
	namePlayerO: 'Player O',
	turn: 'X',
	isGameOver: false,
	winnerKey: '',
	status: 'X turn',
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
	}
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
			const nextPlayer = nextTurn === 'X' ? state.namePlayerX : state.namePlayerO
			const status = randomAfterPlayerTurnMessages(nextPlayer)

			const boardPositions = Object.assign({}, state.boardPositions)
			boardPositions[payload.position] = turn

			return { ...state, turn: nextTurn, boardPositions, status }
		}
		case ACTIONS.GAME_OVER: {
			let winnerKey = payload.turn === 'X' ? 'O' : 'X'
			let status = randomGameOverMessages(payload.turn === 'X' ? state.namePlayerO : state.namePlayerX)

			if (!payload.hasWinner) {
				status = randomDrawMessages()
				winnerKey = ''
			}

			return { ...state, isGameOver: true, status, winnerKey }
		}
		case ACTIONS.UPDATE_PLAYERS_NAME: {
			const namePlayerX = (typeof payload.namePlayerX === 'string') ? payload.namePlayerX : state.namePlayerX
			const namePlayerO = (typeof payload.namePlayerO === 'string') ? payload.namePlayerO : state.namePlayerO

			return { ...state, namePlayerX, namePlayerO }
		}
		case ACTIONS.GAME_RESTART: {
			const namePlayerX = state.namePlayerX
			const namePlayerO = state.namePlayerO

			return { ...initialState, namePlayerX, namePlayerO }
		}
	}

	return state
}

export function randomAfterPlayerTurnMessages(nextPlayer) {
	const messageList = [
		`${nextPlayer} turn`,
		`${nextPlayer} is your turn`,
		`${nextPlayer}, make your move`,
		`Hey ${nextPlayer}! is your turn`,
		`Hey ${nextPlayer}, please caprice!`,
	]

	return messageList[Math.floor(Math.random() * messageList.length)]
}

export function randomGameOverMessages(lastTurnPlayer) {
	const messageList = [
		`The winner is ${lastTurnPlayer}.`,
		`${lastTurnPlayer} Won.`,
		`${lastTurnPlayer} is the Winner.`,
		`The award goes to ${lastTurnPlayer}`,
		`Congratulations for the victory, ${lastTurnPlayer}`,
	]

	return messageList[Math.floor(Math.random() * messageList.length)]
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

	return messageList[Math.floor(Math.random() * messageList.length)]
}