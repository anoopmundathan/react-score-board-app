// Libs
import React from 'react';
import PropTypes from 'prop-types';
// CSS
// import './css/app.css';

// var idCounter = 4;

// Stateful class component
/*var Application = React.createClass({
	propTypes: {
		title: PropTypes.string,
		initialPlayers: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			score: PropTypes.number.isRequired,
			id: PropTypes.number.isRequired
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
});*/

import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers
    }
  }

  render() {    
    return(
     <div className="scoreboard">
       <Header players={this.state.players} title={this.props.title} />
     </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
	initialPlayers: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			score: PropTypes.number.isRequired,
			id: PropTypes.number.isRequired
	})).isRequired
}

App.defaultProps = {
  title: "ScoreBoard"
}

export default App;