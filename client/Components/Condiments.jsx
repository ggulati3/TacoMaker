import React from 'react';
import { CondimentWrapper, Item } from './Style.jsx';

function Condiments(props) {
  return (
  	<CondimentWrapper>
  		<h1>Choose Your Condiment</h1>
  		<div>
	  		{props.condimentItems.map((category, key) =>(
                <Item key={key}>{category}</Item>
           	))}
	  	</div>
  	</CondimentWrapper>

  )
}

export default Condiments;