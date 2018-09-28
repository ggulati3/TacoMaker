import React from 'react';

import { MixingWrapper, Item } from './Style.jsx';

function Mixing(props) {
  return(
  	<MixingWrapper>
  		<h1>Choose Your Mixing</h1>
  		<div>
	  			{props.mixingItems.map((category, key) =>(
                            <Item key={key} onClick = {(e) => {props.change('mixins'); props.add(e);}}>{category}</Item>
                          ))}
	  	</div>
  	</MixingWrapper>
  ) 
}

export default Mixing;