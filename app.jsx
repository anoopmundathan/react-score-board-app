function Header(props) {

	return(
		<div className="heading">
			<h1>{props.title}</h1>
		</div>
	);
	
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
}

function Player(props) {
	return(
			<div className="player">
				<div className="player-name">
					<h2>{props.name}</h2>
				</div>
				<div className="player-scoreboard">
					<div className="player-decrement">
						<h2>-</h2>
					</div>
					<div className="player-score">
						<h2>{props.score}</h2>
					</div>
					<div className="player-increment">
						<h2>+</h2>
					</div>
				</div>
			</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired
}


function Application(props) {
	
	// Return virtual dom element
	return(
		<div className="scoreboard">
			<Header title={props.title}/>			
				<div className="players">
					<Player name="Anoop" score={10}></Player>
					<Player name="Anvita" score={20}></Player>
					<Player name="Neethu" score={30}></Player>
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