import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var PLAYERS = [
	{
		name: "Anoop",
		score: 5,
		id: 1
	}
];

ReactDOM.render(
  <App initialPlayers={ PLAYERS }/>, 
  document.getElementById('container'));