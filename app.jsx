function Application() {
	
	// Return virtual dom element
	return(
		<div>
			<h1>Rendered from application componet</h1>
		</div>
	);

}

ReactDOM.render(<Application/>, document.getElementById('container'));