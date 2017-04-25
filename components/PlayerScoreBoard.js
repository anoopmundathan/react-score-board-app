import React from 'react';

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
	score: React.PropTypes.number.isRequired,
	onChange: React.PropTypes.func.isRequired
}

export default PlayerScoreBoard;