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
				<PlayerScoreBoard 
					score={props.score}
					onChange = {props.onScoreChange}
					/>
			</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	onScoreChange: React.PropTypes.func.isRequired
}

// Stateful class component
var Application = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			score: React.PropTypes.number.isRequired,
			id: React.PropTypes.number.isRequired
		})).isRequired
	},
	getDefaultProps: function() {
			return { 
				title: "Scoreboard"
			}
	},
	getInitialState: function() {
		return {
				players: this.props.initialPlayers
		}
	},
	onScoreChange: function(delta, index) {
		console.log(delta, index);
		this.state.players[index].score += delta;
		this.setState(this.state);
	},
	render: function() {
		return(
			<div className="scoreboard">
				<Header title={this.props.title}/>			
					<div className="players">
						{this.state.players.map(function(player, index) {
							return (
								<Player 
									onScoreChange={function(delta) {this.onScoreChange(delta, index)}.bind(this)}
									name={player.name} 
									score={player.score} 
									key={player.id}/>
							);
						}.bind(this))}
					</div>
			</div>
		); // end of return
	}
	
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));