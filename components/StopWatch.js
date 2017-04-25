import React from 'react';

export default class StopWatch extends React.Component {
  render() {
    return(
      <div className="stopwatch-container">
				<div className="stopwatch-heading">
					<span>STOP WATCH</span>
				</div>
				<div className="stopwatch-counter">
					<span>{seconds}</span>
				</div>
				<div className="stopwatch-buttons">
					<div className="stopwatch-start">
						{
							this.state.running ?
							<button onClick={this.onStop}>Stop</button> 
							: 
							<button onClick={this.onStart}>Start</button>
						}
					</div>
					<div className="stopwatch-reset">
						<button onClick={this.onReset}>Reset</button>
					</div>
				</div>
			</div>
    );
  }
}
// Statefull class componet
/*var StopWatch = React.createClass({
	getInitialState: function() {
		return {
			running: false,
			elapsedTime: 0,
			previousTime: 0
		}
	},
	onStart: function() {
		this.setState({
			running: true
		});

		this.setState({
			previousTime: Date.now()
		});
	},
	onStop: function() {
		this.setState({
			running: false
		});
	},
	onTick: function() {
		if (this.state.running) {
			var now = Date.now();
			this.setState({
				elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				previousTime: now
			})
		}
	},
	onReset: function() {
		this.setState({
			elapsedTime: 0,
			previousTime: Date.now()
		});
	},
	componentDidMount: function() {
		this.interval = setInterval(this.onTick, 100);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		var seconds = Math.floor(this.state.elapsedTime/1000);
	return(
			<div className="stopwatch-container">
				<div className="stopwatch-heading">
					<span>STOP WATCH</span>
				</div>
				<div className="stopwatch-counter">
					<span>{seconds}</span>
				</div>
				<div className="stopwatch-buttons">
					<div className="stopwatch-start">
						{
							this.state.running ?
							<button onClick={this.onStop}>Stop</button> 
							: 
							<button onClick={this.onStart}>Start</button>
						}
					</div>
					<div className="stopwatch-reset">
						<button onClick={this.onReset}>Reset</button>
					</div>
				</div>
			</div>

		);
	}
});

export default StopWatch;*/