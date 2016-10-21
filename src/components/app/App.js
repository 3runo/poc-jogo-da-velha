/* @flow */

import './App.styl'
import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
					<Link className="navbar-brand" to='/home'>Tic-tac-toe</Link>
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" activeClassName="active" to='/home'>Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" activeClassName="active" to='/game'>Game</Link>
						</li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	}
}