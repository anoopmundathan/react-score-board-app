import React from 'react';

// Stateless component
function Player(props) {
	return(
			<div className="player">
				<div className="player-detail">
					<div className="player-remove">
						<a href="#" onClick={props.onPlayerRemove}>Remove</a>
					</div>
					<div className="player-name">
						<h2>{props.name}</h2>
					</div>
				</div>
				<PlayerScoreBoard 
					score={props.score}
					onChange = {props.onScoreChange}
					/>
			</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	onScoreChange: React.PropTypes.func.isRequired,
	onPlayerRemove: React.PropTypes.func.isRequired
}

export default Player;