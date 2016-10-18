import './Grid.styl';
import React from 'react';
// import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class Grid extends React.Component {
	renderRows(boardPositions) {
		if (isEmpty(boardPositions) || Object.keys(boardPositions).length % 3 !== 0) {
			return (
				<tr>
					<td colSpan="3">Oops something went wrong!</td>
				</tr>
			)
		}

		const rows = [];
		let colums = [];

		for (var pos in boardPositions) {
			if (boardPositions.hasOwnProperty(pos)) {
				colums.push(<td key={pos}>{boardPositions[pos] || ''}</td>);

				if (colums.length === 3) {
					rows.push(<tr key={pos}>{colums}</tr>);
					colums = [];
				}
			}
		};

		return rows;
	}

	render() {
		const { boardPositions } = this.props.game;

		return (
			<div className='Grid'>
				<table>
					<tbody>
						{this.renderRows(boardPositions)}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { game: state.game }
}

export default connect(mapStateToProps)(Grid)