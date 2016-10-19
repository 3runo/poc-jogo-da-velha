import './Status.styl'
import React from 'react'

export default class Status extends React.Component {
	static propTypes = {
		status: React.PropTypes.string.isRequired
	}

  render() {
    return (
			<div className='Status'>
				{this.props.status}
			</div>
    )
  }
}