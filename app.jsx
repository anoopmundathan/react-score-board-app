function Application(props) {
	
	// Return virtual dom element
	return(
		<div className="scoreboard">

			<div className="heading">
				<h1>{props.title}</h1>
			</div>

				<div className="players">
				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

				<div className="player">
					<div className="player-name">
						<h2>Anoop</h2>
					</div>
					<div className="player-scoreboard">
						<div className="player-decrement">
							<h2>-</h2>
						</div>
						<div className="player-score">
							<h2>100</h2>
						</div>
						<div className="player-increment">
							<h2>+</h2>
						</div>
					</div>
				</div>

			</div>

			</div>
	);
}

Application.propTypes = {
	title: React.PropTypes.string
}

Application.defaultProps = {
	title: "Scoreboard"
}

ReactDOM.render(<Application/>, document.getElementById('container'));