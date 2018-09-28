import React from 'react';
import { IngredientWrapper, OrderItem } from './Style.jsx';

function Ingredients(props) {
  return(
  	<IngredientWrapper>
  		<h1>Current Order</h1>
  		<OrderItem onClick={(e) => {props.change('shells'); props.removeItem(e);}}>{props.ingredients.shells}</OrderItem>
  		<OrderItem onClick={(e) => {props.change('seasonings'); props.removeItem(e);}}>{props.ingredients.seasonings}</OrderItem>
  		<OrderItem onClick={(e) => {props.change('mixins'); props.removeItem(e);}}>{props.ingredients.mixins}</OrderItem>
  		<OrderItem onClick={(e) => {props.change('condiments'); props.removeItem(e);}}>{props.ingredients.condiments}</OrderItem>
  		<OrderItem onClick={(e) => {props.change('baseLayers'); props.removeItem(e);}}>{props.ingredients.baseLayers}</OrderItem>

  	</IngredientWrapper>
  ) 
}

export default Ingredients;