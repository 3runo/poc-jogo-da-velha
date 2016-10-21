import { ACTIONS } from '../actions'

export const initialState = {
	scorePlayerX: 0,
	scorePlayerO: 0
}

export default function scoreReducerDefinition(state = initialState, action) {
	const { type, payload } = action

	if (payload === undefined) {
		return initialState
	}

	switch (type) {
		case ACTIONS.GAME_OVER: {
			const prop = payload.turn === 'X' ? 'scorePlayerO' : 'scorePlayerX'
			const value = parseInt(state[prop], 10) + 1

			return { ...state, [prop]: value }
		}
		
		case ACTIONS.SCORE_RESET: 
			return initialState
	}

	return state
}
