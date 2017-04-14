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
				<PlayerScoreBoard score={props.score}/>
			</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired
}

var PlayerScoreBoard = React.createClass({
	propTypes: {
		score: React.PropTypes.number.isRequired
	},
	render: function() {
		return (
				<div className="player-scoreboard">
					<div className="player-decrement">
						<h2>-</h2>
					</div>
					<div className="player-score">
						<h2>{this.props.score}</h2>
					</div>
					<div className="player-increment">
						<h2>+</h2>
					</div>
				</div>
		)
	}
});

function Application(props) {
	
	// Return virtual dom element
	return(
		<div className="scoreboard">
			<Header title={props.title}/>			
				<div className="players">
					<Player name="Anoop" score={100}></Player>
					<Player name="Anvita" score={200}></Player>
					<Player name="Neethu" score={300}></Player>
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