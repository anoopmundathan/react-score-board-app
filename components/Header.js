import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = (props) => {
  return(
    <div className="heading">
			<Stats players={props.players}/>
			<div className="title-container">
				<h1>{props.title}</h1>
			</div>
				<StopWatch />
		</div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}

export default Header;
