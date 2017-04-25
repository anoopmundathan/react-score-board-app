import React from 'react';

export default class AddPlayerForm extends React.Component {
  render() {
    return(
      <div className="form-container">
				<form onSubmit={this.onPlayerSubmit}>
					<input type="text" value={this.state.name} onChange={this.onPlayerChange}/>
					<input type="submit" value="Add Player"/>
				</form>
		  </div>
    );
  }
}

/*var AddPlayerForm = React.createClass({
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
			<div className="form-container">
				<form onSubmit={this.onPlayerSubmit}>
					<input type="text" value={this.state.name} onChange={this.onPlayerChange}/>
					<input type="submit" value="Add Player"/>
				</form>
			</div>
		);
	}
});*/