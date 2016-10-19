import { ACTIONS } from '../actions'

const initialState = {
	playerX: 0,
	playerO: 0
}

export default function scoreReducerDefinition (state = initialState, action) {
	const { type, payload } = action

	if (payload === undefined) {
		return initialState
	}

	switch (type) {
		case ACTIONS.GAME_OVER: {
			const prop = payload.turn === 'X' ? 'playerO' : 'playerX'

			return { ...state, [prop]: state[prop] + 1 }
		}
	}

	return state
}
