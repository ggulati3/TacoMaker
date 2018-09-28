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
		this.formSentence = this.formSentence.bind(this);
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
		this.setState({[this.item]: e.currentTarget.textContent})
		
	}

	changeItem (value){
		this.item = value;
		console.log(this.item)
	}

	formSentence(){
		alert(`Congratulations! You have ordered a taco with ${this.state.shells},
			${this.state.mixins}, ${this.state.seasonings}, ${this.state.condiments}, 
			${this.state.baseLayers}`)
	}

	render(){ 

			if (this.state.isLoading) {
     	 return <p>Loading...</p>;
			} else {
				return(
					<WebPage> 
						<Navbar fillOrder = {this.formSentence}></Navbar>
						<Shell shellItems = {this.state.menu.shells} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Shell>
						<Seasoning seasoningItems = {this.state.menu.seasonings} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Seasoning>
						<Mixing mixingItems = {this.state.menu.mixins} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Mixing>
						<Ingredients ingredients = {this.state}></Ingredients>
						<Condiments condimentItems = {this.state.menu.condiments} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></Condiments>
						<BaseLayer baseLayerItems = {this.state.menu.baseLayers} add = {this.addIngredients} item = {this.item} change = {this.changeItem}></BaseLayer>
					</WebPage>
				);	
			}
	}
		
}

ReactDOM.render(<App />, document.getElementById('root'))