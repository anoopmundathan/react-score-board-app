import React from 'react';

// StopWatch class component
/*export default class StopWatch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      running: false,
			elapsedTime: 0,
			previousTime: 0
    }
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  // When start button clicked
  onStart() {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  }

  // When stop button clicked
  onStop() {
    this.setState({
      running: false
    });
  }

  // This runs every 100ms
  onTick() {

    if (this.state.running) {
			var now = Date.now();

      // Set new state
			this.setState({
				elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				previousTime: now
			});
		}
  }

  // When reset button clicked
  onReset() {
    this.setState({
			elapsedTime: 0,
			previousTime: Date.now()
		});
  }
  
  // Component life cycle hooks
  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }

  // Component life cycle hooks
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  // Render method
  render() {
    
    // Calculate seconds
    let seconds = Math.floor(this.state.elapsedTime/1000);

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
  } // render
}*/

export default class StopWatch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      running: false,
			elapsedTime: 0,
			previousTime: 0
    }
    // this.onStart = this.onStart.bind(this);
    // this.onStop = this.onStop.bind(this);
    // this.onTick = this.onTick.bind(this);
    // this.onReset = this.onReset.bind(this);
  }

  // When start button clicked
  const onStart = () => {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  }

  // When stop button clicked
  const onStop = () => {
    this.setState({
      running: false
    });
  }

  // This runs every 100ms
  const onTick = () => {

    if (this.state.running) {
			var now = Date.now();

      // Set new state
			this.setState({
				elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
				previousTime: now
			});
		}
  }

  // When reset button clicked
  const onReset = () => {
    this.setState({
			elapsedTime: 0,
			previousTime: Date.now()
		});
  }
  
  // Component life cycle hooks
  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }

  // Component life cycle hooks
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  // Render method
  render() {
    
    // Calculate seconds
    let seconds = Math.floor(this.state.elapsedTime/1000);

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
  } // render
}

