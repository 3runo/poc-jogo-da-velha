/* @flow */

import './Status.styl'
import React from 'react'

type TProps = {
	status: string,
	isGameOver: boolean,
	winnerKey: string
}

const Status = ({ status, isGameOver, winnerKey }: TProps) => (
	<div className={
		`Status${isGameOver ? ' game-over' : ''}${winnerKey === 'X' ? ' x-wins' : winnerKey === 'O' ? ' o-wins' : ''}`
	}>
		{status}
	</div>
)

Status.propTypes = {
	status: React.PropTypes.string.isRequired,
	isGameOver: React.PropTypes.bool.isRequired,
	winnerKey: React.PropTypes.string.isRequired
}

export default Status