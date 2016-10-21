import { expect } from '../test_helper'
import { ACTIONS } from './../../src/store/actions'
import GameReducer, {
	initialState,
	randomAfterPlayerTurnMessages,
	randomGameOverMessages,
	randomDrawMessages
} from './../../src/store/reducers/game-reducer'

describe('GAME REDUCER', () => {
	describe('REDUCER TYPE CASES', () => {
		it('Should handle with unknown types', () => {
			expect(GameReducer(undefined, {})).to.deep.equal(initialState)
		})

		it('Should handle with GAME_RESTART type action', () => {
			const type = ACTIONS.GAME_RESTART
			const payload = {}
			
			expect(GameReducer(undefined, { type, payload })).to.deep.equal(initialState)
		})
		
		it('Should handle with GAME_OVER type action', () => {
			const type = ACTIONS.GAME_OVER
			const payload = { turn: 'X', hasWinner: true }
			
			expect(GameReducer(undefined, { type, payload })).to.have.property('isGameOver', true);
		})
		
		it('Should handle with AFTER_PLAYER_TURN type action', () => {
			const type = ACTIONS.AFTER_PLAYER_TURN
			const payload = { position: 1, turn: 'X' }
			
			expect(GameReducer(undefined, { type, payload })).to.have.property('turn', 'O');
			expect(GameReducer(undefined, { type, payload })).to.have.property('status').and.not.equal('');
		})
	})

	describe('REDUCER UTILITY FUNCIONS', () => {
		it('Should return a string information after player turn ends', () => {
			expect(randomAfterPlayerTurnMessages('X', 'O')).to.be.a('string')
		})
		
		it('Should return a string information after game over', () => {
			expect(randomGameOverMessages('X')).to.be.a('string')
		})
		
		it('Should return a string information after game over - draw', () => {
			expect(randomDrawMessages()).to.be.a('string')
		})
	})
})
