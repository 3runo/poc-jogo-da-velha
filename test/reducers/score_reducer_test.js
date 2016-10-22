import { expect } from '../test_helper'
import { ACTIONS } from './../../src/store/actions'
import ScoreReducer, { initialState } from './../../src/store/reducers/score-reducer'

describe('SCORE REDUCER', () => {
	it('Should handle with unknown types', () => {
		expect(ScoreReducer(undefined, {})).to.deep.equal(initialState)
	})

	it('Should handle with GAME_OVER type action, last turn = "O"', () => {
		const type = ACTIONS.GAME_OVER
		const payload = { turn: 'X', hasWinner: true }

		expect(ScoreReducer(initialState, { type, payload }))
			.to.have.property('scorePlayerO')
			.and.equal(1);
	})

	it('Should handle with GAME_OVER type action, last turn = "X"', () => {
		const type = ACTIONS.GAME_OVER
		const payload = { turn: 'O', hasWinner: true }

		expect(ScoreReducer(initialState, { type, payload }))
			.to.have.property('scorePlayerX')
			.and.equal(1);
	})

	it('Should handle with SCORE_RESET type action', () => {
		const type = ACTIONS.SCORE_RESET
		const payload = true

		expect(ScoreReducer(initialState, { type, payload })).to.deep.equal(initialState)
	})
})