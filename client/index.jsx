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
	}

	render(){
		return(
			<WebPage>
				<Navbar></Navbar>
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