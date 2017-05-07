import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
  
  var totalPlayers = props.players.length;
	
  var totalScore = props.players.reduce(function(total, player) {
		return total + player.score;
	}, 0);

	return(
		<div className="stats-container">
			<table>	
				<tbody>
					<tr>
						<td>Player:</td>
						<td>{totalPlayers}</td>
					</tr>
					<tr>
						<td>Score:</td>
						<td>{totalScore}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Stats.propTypes = {
	players: PropTypes.array.isRequired
}

export default Stats;