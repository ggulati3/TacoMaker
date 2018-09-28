import React from 'react';
import { SeasoningWrapper, Item } from './Style.jsx';

function Seasoning(props) {
  return (
  	<SeasoningWrapper>
  		<h1>Choose Your Seasoning</h1>
    
  		<div>
	  			{props.seasoningItems.map((category, key) =>(
                            <Item key={key} onClick = {(e) => {props.change('seasonings'); props.add(e);}}>{category}</Item>
                          ))}
	  	</div>
  	</SeasoningWrapper>
  )
}

export default Seasoning;