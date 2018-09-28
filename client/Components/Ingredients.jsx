import React from 'react';
import { IngredientWrapper } from './Style.jsx';

function Ingredients(props) {
  return(
  	<IngredientWrapper>
  		<h1>Current Order</h1>
  		<h3>{props.ingredients.shells}</h3>
  		<h3>{props.ingredients.seasonings}</h3>
  		<h3>{props.ingredients.mixins}</h3>
  		<h3>{props.ingredients.condiments}</h3>
  		<h3>{props.ingredients.baseLayers}</h3>

  	</IngredientWrapper>
  ) 
}

export default Ingredients;