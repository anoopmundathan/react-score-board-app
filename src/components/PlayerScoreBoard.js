import React from 'react';
import PropTypes from 'prop-types';

// Stateless component
function PlayerScoreBoard(props) {
	return (
			<div className="player-scoreboard">
				<div className="player-decrement">
					<h2 onClick={function() {props.onChange(-1)}}>-</h2>
				</div>
				<div className="player-score">
					<h2>{props.score}</h2>
				</div>
				<div className="player-increment">
					<h2 onClick={function() {props.onChange(1)}}>+</h2>
				</div>
			</div>
	);
}

PlayerScoreBoard.PropTypes = {
	score: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

export default PlayerScoreBoard;