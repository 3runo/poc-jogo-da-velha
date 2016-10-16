import './Grid.styl';
import React from 'react'
// import { browserHistory } from 'react-router'

export default class Grid extends React.Component {
	render() {
		return (
			<div className='Grid'>
				<table>
					<tbody>
						<tr>
							<td>O</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>X</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}