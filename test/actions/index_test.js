import { renderComponent, expect } from '../test_helper'
import {
	ACTIONS,
	onPlayerTurnComplete,
	gameOver,
	scoreReset,
	gameRestart
} from './../../src/store/actions'

describe('ACTIONS CREATORS', () => {
	describe('GAME ACTIONS', () => {
		it('Player Turn action should have the current type', () => {
			const action = onPlayerTurnComplete(1, 'X')
			expect(action.type).to.equal(ACTIONS.AFTER_PLAYER_TURN)
		})
		it('Player Turn action should have the current payload', () => {
			const action = onPlayerTurnComplete(9, 'O')
			expect(action.payload).to.be.instanceOf(Object)
			expect(action.payload).to.deep.equal({ position: 9, turn: 'O' });
		})

		it('Game Over action should have the current type', () => {
			const action = gameOver('X', false)
			expect(action.type).to.equal(ACTIONS.GAME_OVER)
		})
		it('Game Over action should have the current payload', () => {
			const action = gameOver('X', true)
			expect(action.payload).to.be.instanceOf(Object)
			expect(action.payload).to.deep.equal({ turn: 'X', hasWinner: true });
		})

		it('Game Restart action should have the current type', () => {
			const action = gameRestart()
			expect(action.type).to.equal(ACTIONS.GAME_RESTART)
		})
		it('Game Restart action should have the current payload', () => {
			const action = gameRestart()
			expect(action.payload).to.deep.equal(true);
		})
	})

	describe('SCORE ACTIONS', () => {
		it('Score Reset action should have the current type', () => {
			const action = scoreReset()
			expect(action.type).to.equal(ACTIONS.SCORE_RESET)
		})
		it('Score Reset action should have the current payload', () => {
			const action = scoreReset()
			expect(action.payload).to.deep.equal(true);
		})
	})
})
