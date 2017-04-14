var PLAYERS = [
	{
		name: "Anoop",
		score: 123,
		id: 1
	},
	{
		name: "Stu",
		score: 343,
		id: 2
	},
	{
		name: "Sam",
		score: 567,
		id: 3
	}
];

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
				<PlayerScoreBoard initialScore={props.score}/>
			</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired
}

var PlayerScoreBoard = React.createClass({
	propTypes: {
		initialScore: React.PropTypes.number.isRequired
	},
	getInitialState: function() {
		return {
			score: this.props.initialScore
		}
	},
	incrementScore: function(e) {
		this.setState({
			score: this.state.score + 1
		});
	},

	decrementScore: function() {
		this.setState({
			score: this.state.score - 1
		});
	},
	render: function() {
		return (
				<div className="player-scoreboard">
					<div className="player-decrement">
						<h2 onClick={this.decrementScore}>-</h2>
					</div>
					<div className="player-score">
						<h2>{this.state.score}</h2>
					</div>
					<div className="player-increment">
						<h2 onClick={this.incrementScore}>+</h2>
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
					{props.players.map(function(player) {
						return <Player name={player.name} score={player.score} key={player.id}/>
					})}
				</div>
			</div>
	);
}

Application.propTypes = {
	title: React.PropTypes.string,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired
	})).isRequired
}

Application.defaultProps = {
	title: "Scoreboard"
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));