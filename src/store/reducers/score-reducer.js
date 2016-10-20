import { ACTIONS } from '../actions'

const initialState = {
	playerX: window.localStorage.getItem('playerX') || 0,
	playerO: window.localStorage.getItem('playerO') || 0
}

export default function scoreReducerDefinition(state = initialState, action) {
	const { type, payload } = action

	if (payload === undefined) {
		return initialState
	}

	switch (type) {
		case ACTIONS.GAME_OVER: {
			const prop = payload.turn === 'X' ? 'playerO' : 'playerX'
			const value = parseInt(state[prop], 10) + 1

			window.localStorage.setItem(prop, value)

			return { ...state, [prop]: value }
		}
		case ACTIONS.SCORE_RESET: {
			window.localStorage.removeItem('playerX')
			window.localStorage.removeItem('playerO')

			return { playerX: 0, playerO: 0 }
		}
	}

	return state
}
