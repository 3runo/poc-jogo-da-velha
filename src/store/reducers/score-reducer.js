import { ACTIONS } from '../actions'

// const storage = window.localStorage 
// const initialState = {
// 	playerX: storage.getItem('playerX') || 0,
// 	playerO: storage.getItem('playerO') || 0
// }

export const initialState = {
	playerX: 0,
	playerO: 0
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

			// storage.setItem(prop, value)

			return { ...state, [prop]: value }
		}
		case ACTIONS.SCORE_RESET: {
			// storage.removeItem('playerX')
			// storage.removeItem('playerO')

			return { playerX: 0, playerO: 0 }
		}
	}

	return state
}
