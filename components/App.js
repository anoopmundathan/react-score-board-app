// Libs
import React from 'react';
import PropTypes from 'prop-types';

// CSS
// import './css/app.css';

var idCounter = 4;

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

// Statefull class component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers
    }
  }

  // Increase or decrease score
  onScoreChange(delta, index) {
    this.state.players[index].score += delta;
		this.setState(this.state);
  }

  // Add New Player
  onPlayerAdd(name) {
    this.state.players.push({
			name: name,
			score: 0,
			id: idCounter
		});
		this.setState(this.state.players);
		idCounter += 1;
  }

  // Remove Player
  onPlayerRemove(index) {
    this.state.players.splice(index, 1);
		this.setState(this.state.players);
  }

  render() {    
    return(
     <div className="scoreboard">
       <Header players={this.state.players} title={this.props.title} />
         <div className="players">
           
				   {this.state.players.map(function(player, index) {
						  return (
								<Player 
                  onScoreChange={(delta) => this.onScoreChange(delta, index)}
                  onPlayerRemove={() => this.onPlayerRemove(index)}
									name={player.name} 
									score={player.score} 
									key={player.id}/>
							);
						}.bind(this))}
					</div>
					
          <AddPlayerForm onPlayerAdd={(name) => this.onPlayerAdd(name)}/>
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

// {/*onScoreChange={function(delta) {this.onScoreChange(delta, index)}.bind(this)}*/}
// {/*onPlayerRemove={function() {this.onPlayerRemove(index)}.bind(this)}*/}
// {/*<AddPlayerForm onPlayerAdd={this.onPlayerAdd.bind(this)}/>*/}