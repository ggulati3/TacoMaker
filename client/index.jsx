import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Components/navbar.jsx';
import Shell from './Components/Shell.jsx';
import BaseLayer from './Components/BaseLayer.jsx';
import Mixing from './Components/Mixing.jsx';
import Seasoning from './Components/Seasoning.jsx';
import Condiments from './Components/Condiments.jsx';
import Ingredients from './Components/Ingredients.jsx';

import { WebPage } from './Components/Style.jsx'

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			shells: '',
			mixins: '',
			seasonings: '',
			condiments: '',
			baseLayers: ''
		}
		this.getAPI = this.getAPI.bind(this);

	}

	getAPI(){
	
	}

	render(){
		return(
			<WebPage onClick = {this.getAPI}>
				<Navbar>{console.log(this.state)}</Navbar>
				<Shell></Shell>
				<Seasoning></Seasoning>
				<Ingredients></Ingredients>
				<Mixing></Mixing>
				<BaseLayer></BaseLayer>
				<Condiments></Condiments>
			</WebPage>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))