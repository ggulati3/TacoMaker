import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
			baseLayers: '',
			isLoading: true
		}

		this.getMenu = this.getMenu.bind(this)
	}

	getMenu(){
		axios.get('/taco/menu').then( (obj) => {
			this.setState({isLoading: false, menu: obj.data})
		})
	}

	componentDidMount() {
		this.getMenu()
	}

	render(){ 

			if (this.state.isLoading) {
     	 return <p>Loading...</p>;
			} else {
				return(
					<WebPage> 
						<Navbar></Navbar>
						<Shell shellItems = {this.state.menu.shells}></Shell>
						<Seasoning seasoningItems = {this.state.menu.seasonings}></Seasoning>
						<Ingredients></Ingredients>
						<Mixing mixingItems = {this.state.menu.mixins}></Mixing>
						<BaseLayer baseLayerItems = {this.state.menu.baseLayers}></BaseLayer>
						<Condiments condimentItems = {this.state.menu.condiments}></Condiments>
					</WebPage>
				);	
			}
	}
		
}

ReactDOM.render(<App />, document.getElementById('root'))