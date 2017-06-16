import React, { Component } from 'react';

// StopWatch class component
export default class StopWatch extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      running: false,
			elapsedTime: 0,
			previousTime: 0
    }
    // Binding pattern -1
    // this.onStart = this.onStart.bind(this);
    // this.onStop = this.onStop.bind(this);
    // this.onTick = this.onTick.bind(this);
    // this.onReset = this.onReset.bind(this);
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
    // this.interval = setInterval(this.onTick, 100);
    this.interval = setInterval(() => this.onTick(), 100);
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
							<button onClick={ () => this.onStop() }>Stop</button> 
							: 
							<button onClick={ () => this.onStart() }>Start</button>
						}
					</div>
					<div className="stopwatch-reset">
						<button onClick={ () => this.onReset() }>Reset</button>
					</div>
				</div>
			</div>
    );
  } // render
}

// Pattern 1
{/*<button onClick={ this.onStop }>Stop</button> */}
{/*<button onClick={ this.onStart }>Start</button>*/}
{/*<button onClick={ this.onReset }>Reset</button>*/}

// Pattern 2 - bind(this)
{/*<button onClick={ this.onStop.bind(this) }>Stop</button> */}
{/*<button onClick={ this.onStart.bind(this) }>Start</button>*/}
{/*<button onClick={ this.onReset.bind(this) }>Reset</button>*/}

// Pattern 3 
// <button onClick={ () => this.onStart() }>Start</button>

// Pattern 4
//<button onClick={function() { console.log(this)}.bind(this) } >Start</button>
