import { ACTIONS } from '../actions'

const INITIAL_STATE = {
	playerX: 0,
	playerO: 0
}

export default function scoreReducerDefinition (state = INITIAL_STATE, action) {
	switch (action.type) {
		case ACTIONS.WWWWWW:
			return action.payload
		default:
			break
	}

	return state
}
