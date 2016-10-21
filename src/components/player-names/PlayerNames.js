/* @flow */

import './PlayerNames.styl'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updatePlayersName } from './../../store/actions'

// Flow type annotation
type TState = { isFormVisible: boolean }

type TProps = {
	namePlayerX: ?string,
	namePlayerO: ?string
}

class PlayerNames extends React.Component {
	static propTypes = {
		namePlayerX: React.PropTypes.string,
		namePlayerO: React.PropTypes.string,
		updatePlayersName: React.PropTypes.func.isRequired
	}

	state: TState = { isFormVisible: false }

	onFormSubmit = (event: Event) => {
		event.preventDefault()

		this.setState({isFormVisible: false})		
	}

	render() {
		const { namePlayerX, namePlayerO, updatePlayersName } = this.props
		const { isFormVisible } = this.state

		return isFormVisible
			? (
				<form className="PlayerNames form-inline" onSubmit={this.onFormSubmit}>
					<div className="form-group">
						<label className="sr-only">{namePlayerX}</label>
						<input
							type="text"
							className="form-control player-x"
							value={namePlayerX}
							onChange={(e) => updatePlayersName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label className="sr-only">{namePlayerO}</label>
						<input
							type="text"
							className="form-control player-o"
							value={namePlayerO}
							onChange={(e) => updatePlayersName(null, e.target.value)}
						/>
					</div>
					<button type="submit" className="reticent-button inverse">Ok</button>
				</form>
			)
			: (
				<div className="PlayerNames">
					<button
						type="button"
						className="reticent-button"
						onClick={() => this.setState({isFormVisible: true})}
					>Set player names</button>
				</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updatePlayersName }, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayerNames)