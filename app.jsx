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

var idCounter = 4;

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

var AddPlayerForm = React.createClass({
	propTypes: {
		onPlayerAdd: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		return {
			name: ""
		}
	},
	onPlayerSubmit: function(e) {
		e.preventDefault();
		this.props.onPlayerAdd(this.state.name);
		this.setState({
			name: ""
		});
	},
	onPlayerChange: function(e) {
		this.setState({
			name: e.target.value
		});
	},
	render: function() {
		return(
			<div>
				<form onSubmit={this.onPlayerSubmit}>
					<input type="text" value={this.state.name} onChange={this.onPlayerChange}/>
					<input type="submit" value="Add Player"/>
				</form>
			</div>
		);
	}
});
// Stateless component
function Stats(props) {
	var totalPlayers = props.players.length;
	var totalScore = props.players.reduce(function(total, player) {
		return total + player.score;
	}, 0)
	return(
		<table>	
			<tbody>
				<tr>
					<td>Player:</td>
					<td>{totalPlayers}</td>
				</tr>
				<tr>
					<td>Score:</td>
					<td>{totalScore}</td>
				</tr>
			</tbody>
		</table>
	);
}

Stats.propTypes = {
	players: React.PropTypes.array.isRequired
}

// Stateless component
function Header(props) {

	return(
		<div className="heading">
			<Stats players={props.players}/>
			<h1>{props.title}</h1>
		</div>
	);
	
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.array.isRequired
}

// Stateless component
function Player(props) {
	return(
			<div className="player">
				<div className="player-name">
						<a href="#" onClick={props.onPlayerRemove}>Remove</a>
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
	onScoreChange: React.PropTypes.func.isRequired,
	onPlayerRemove: React.PropTypes.func.isRequired
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
		this.state.players[index].score += delta;
		this.setState(this.state);
	},
	onPlayerAdd: function(name) {
		this.state.players.push({
			name: name,
			score: 0,
			id: idCounter
		});
		this.setState(this.state.players);
		idCounter += 1;
	},
	onPlayerRemove: function(index) {
		this.state.players.splice(index, 1);
		this.setState(this.state.players);
	},
	render: function() {
		return(
			<div className="scoreboard">
				<Header players={this.state.players} title={this.props.title}/>			
					<div className="players">
						{this.state.players.map(function(player, index) {
							return (
								<Player 
									onScoreChange={function(delta) {this.onScoreChange(delta, index)}.bind(this)}
									onPlayerRemove={function() {this.onPlayerRemove(index)}.bind(this)}
									name={player.name} 
									score={player.score} 
									key={player.id}/>
							);
						}.bind(this))}
					</div>
					<AddPlayerForm onPlayerAdd={this.onPlayerAdd}/>
			</div>
		); // end of return
	}
	
});

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));