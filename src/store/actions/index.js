export const ACTIONS = {
	AFTER_PLAYER_TURN: 'AFTER_PLAYER_TURN',
	GAME_OVER: 'GAME_OVER',
	GAME_RESTART: 'GAME_RESTART'
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

export function gameRestart() {
	return {
    type: ACTIONS.GAME_RESTART,
    payload: true
  }
}