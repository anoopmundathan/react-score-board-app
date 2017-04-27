import React from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  onPlayerSubmit(e) {
    e.preventDefault();
		this.props.onPlayerAdd(this.state.name);
		this.setState({
			name: ""
		});
  }
  
  onPlayerChange(e) {
    this.setState({
			name: e.target.value
		});
  }
  
  render() {
    return(
      <div className="form-container">
          <form onSubmit={(e) => this.onPlayerSubmit(e)}>
          <input type="text" value={this.state.name} onChange={(e) => this.onPlayerChange(e)}/>
					<input type="submit" value="Add Player"/>
				</form>
		  </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onPlayerAdd: PropTypes.func.isRequired
}

{/*<form onSubmit={this.onPlayerSubmit.bind(this)}>*/}
{/*<input type="text" value={this.state.name} onChange={this.onPlayerChange.bind(this)}/>*/}