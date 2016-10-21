/* @flow */

import './Status.styl'
import React from 'react'

const Status = ({ status }: { status: string }) => (
	<div className='Status'>{status}</div>
)

Status.propTypes = {
	status: React.PropTypes.string.isRequired
}

export default Status;