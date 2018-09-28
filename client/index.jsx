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

		this.item = '';

		this.getMenu = this.getMenu.bind(this)
		this.addIngredients = this.addIngredients.bind(this);
		this.changeItem = this.changeItem.bind(this);
	}

	getMenu(){
		axios.get('/taco/menu').then( (obj) => {
			this.setState({isLoading: false, menu: obj.data})
		})
	}

	componentDidMount() {
		this.getMenu()
	}

	addIngredients(e){
		e.preventDefault();
		console.log(this.item)
		this.setState({[this.item]: e.currentTarget.textContent})
		//console.log(this.state)
		
	}

	changeItem (value){
		this.item = value;
		console.log(this.item)
	}

	render(){ 

			if (this.state.isLoading) {
     	 return <p>Loading...</p>;
			} else {
				return(
					<WebPage> 
						<Navbar></Navbar>
						<Shell shellItems = {this.state.menu.shells} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Shell>
						<Seasoning seasoningItems = {this.state.menu.seasonings} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Seasoning>
						<Ingredients ingredients = {this.state}></Ingredients>

						<Mixing mixingItems = {this.state.menu.mixins} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Mixing>
						<BaseLayer baseLayerItems = {this.state.menu.baseLayers} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></BaseLayer>
						<Condiments condimentItems = {this.state.menu.condiments} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Condiments>
					</WebPage>
				);	
			}
	}
		
}

ReactDOM.render(<App />, document.getElementById('root'))