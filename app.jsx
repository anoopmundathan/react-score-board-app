function Application() {
	
	// Return virtual dom element
	return(
		<div className="scoreboard">

			<div className="heading">
				<h1>Scoreboard - React</h1>
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

ReactDOM.render(<Application/>, document.getElementById('container'));