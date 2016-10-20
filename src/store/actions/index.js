export const ACTIONS = {
	AFTER_PLAYER_TURN: 'AFTER_PLAYER_TURN',
	GAME_OVER: 'GAME_OVER',
	GAME_RESTART: 'GAME_RESTART',
	SCORE_RESET: 'SCORE_RESET'
}

export function onPlayerTurnComplete(position, turn) {
	return {
		type: ACTIONS.AFTER_PLAYER_TURN,
		payload: { position, turn }
	}
}

export function gameOver(turn, hasWinner) {
	return {
		type: ACTIONS.GAME_OVER,
		payload: { turn, hasWinner }
	}
}

export function scoreReset() {
	return {
		type: ACTIONS.SCORE_RESET,
		payload: true
	}
}

export function gameRestart() {
	return {
		type: ACTIONS.GAME_RESTART,
		payload: true
	}
}