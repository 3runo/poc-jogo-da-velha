/* @flow */

import type { TBoardPositions } from './../types'

export function hasTheGameAWinner(boardPositions: TBoardPositions) {
	const regexp = /^(...)*(X|O)\2\2|(X|O)..\3..\3|(X|O)(...\4){2}|^..(X|O).\6.\6/
	const stringPositions = boardPositionsToStringFormat(boardPositions)

	return !!stringPositions.match(regexp)
}

export function isThereAnyPositionAvailable(boardPositions: TBoardPositions) {
	const stringPositions = boardPositionsToStringFormat(boardPositions)

	return stringPositions.indexOf('-') !== -1
}

export function boardPositionsToStringFormat(boardPositions: TBoardPositions) {
	let output = ''

	if (!boardPositions || typeof boardPositions !== 'object') {
		return output	
	}

	for (const position in boardPositions) {
		if (boardPositions.hasOwnProperty(position)) {
			const mark = boardPositions[position]
			output += !mark ? '-' : mark
		}
	}

	return output
}