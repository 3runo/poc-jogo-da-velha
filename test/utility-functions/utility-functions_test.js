import { expect } from '../test_helper'
import { initialState } from './../../src/store/reducers/game-reducer'
import { hasTheGameAWinner, isThereAnyPositionAvailable, boardPositionsToStringFormat } from './../../src/utility-functions'

describe('UTILITY FUNCTIONS', () => {
	describe('HAS THE GAME A WINNER', () => {
		it('Should not have a winner with initial state', () => {
			expect(hasTheGameAWinner(initialState.boardPositions)).to.be.false
		})

		it('Should have a winner with first line filled', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['1'] = 'X'
			boardPositions['2'] = 'X'
			boardPositions['3'] = 'X'

			expect(hasTheGameAWinner(boardPositions)).to.be.true
		})
		
		it('Should have a winner with second line filled', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['4'] = 'O'
			boardPositions['5'] = 'O'
			boardPositions['6'] = 'O'

			expect(hasTheGameAWinner(boardPositions)).to.be.true
		})
		
		it('Should have a winner with third line filled', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['7'] = 'X'
			boardPositions['8'] = 'X'
			boardPositions['9'] = 'X'

			expect(hasTheGameAWinner(boardPositions)).to.be.true
		})

		it('Should have a winner with diagonal line 1 filled', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['1'] = 'O'
			boardPositions['5'] = 'O'
			boardPositions['9'] = 'O'

			expect(hasTheGameAWinner(boardPositions)).to.be.true
		})
		
		it('Should have a winner with diagonal line 2 filled', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['7'] = 'X'
			boardPositions['5'] = 'X'
			boardPositions['3'] = 'X'

			expect(hasTheGameAWinner(boardPositions)).to.be.true
		})
		
		it('Should not have a winner with random positions', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			boardPositions['6'] = 'X'
			boardPositions['5'] = 'X'
			boardPositions['3'] = 'X'

			expect(hasTheGameAWinner(boardPositions)).to.be.false
		})
	})

	describe('IS THERE ANY POSITION AVAILABLE', () => {
		it('Should have available postitions on initial state', () => {
			expect(isThereAnyPositionAvailable(initialState.boardPositions)).to.be.true
		})

		it('Should have available postitions', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			for (var position in boardPositions) {
				if (boardPositions.hasOwnProperty(position)) {
					boardPositions[position] = 'X'
				}
			}

			expect(isThereAnyPositionAvailable(boardPositions)).to.be.false
		})
		
		it('Should have 1 postition available', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			for (var position in boardPositions) {
				if (boardPositions.hasOwnProperty(position) && position !== '1') {
					boardPositions[position] = 'X'
				}
			}

			expect(isThereAnyPositionAvailable(boardPositions)).to.be.true
		})
	})

	describe('TRANSFORM BOARD OBJECT TO STRING', () => {
		it('Should transform the board object in a string', () => {
			expect(boardPositionsToStringFormat(initialState.boardPositions)).to.be.a('string')
		})
		
		it('Should transform the board object to "XXXXXXXXX" format', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			for (var position in boardPositions) {
				if (boardPositions.hasOwnProperty(position)) {
					boardPositions[position] = 'X'
				}
			}

			expect(boardPositionsToStringFormat(boardPositions)).to.be.equal('XXXXXXXXX')
		})

		it('Should transform the board object to "XOXOXOXOX" format', () => {
			const boardPositions = Object.assign({}, initialState.boardPositions)
			for (var position in boardPositions) {
				if (boardPositions.hasOwnProperty(position)) {
					boardPositions[position] = parseInt(position, 10) % 2 === 0 ? 'X' : 'O'
				}
			}

			expect(boardPositionsToStringFormat(boardPositions)).to.be.equal('OXOXOXOXO')
		})
	})
})
