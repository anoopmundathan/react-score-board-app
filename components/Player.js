import React from 'react';
import PropTypes from 'prop-types';

import PlayerScoreBoard from './PlayerScoreBoard';

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
	name: PropTypes.string.isRequired,
	onScoreChange: PropTypes.func.isRequired,
	onPlayerRemove: PropTypes.func.isRequired
}

export default Player;