import './Home.styl'
import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="col-sm-12">
					<h3>About the game</h3>
					<p>
						Is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
					</p>
					<a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">Wikipedia</a>					
				</div>
				<div className="col-sm-12 game-call-to-action">
					<Link className="btn btn-primary" to='/game'>Play</Link>
				</div>
			</div>
		)
	}
}