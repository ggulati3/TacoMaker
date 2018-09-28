import React from 'react';
import { CondimentWrapper, Item } from './Style.jsx';

function Condiments(props) {
  return (
  	<CondimentWrapper>
  		<h1>Choose Your Condiment</h1>
  		<div>
	  		{props.condimentItems.map((category, key) =>(
                <Item key={key} onClick = {(e) => {props.change('condiments'); props.add(e);}}>{category}</Item>
           	))}
	  	</div>
  	</CondimentWrapper>

  )
}

export default Condiments;