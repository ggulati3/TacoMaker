import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Components/navbar.jsx'


class App extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<Navbar></Navbar>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))