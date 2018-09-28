import React from 'react';
import { BaseLayerWrapper, Item } from './Style.jsx';

function BaseLayer(props) {
  return (
  	<BaseLayerWrapper>
  		<h1>Choose Your Base Layer</h1>
  		<div>
	  		{props.baseLayerItems.map((category, key) =>(
                <Item key={key}>{category}</Item>
            ))}
	  	</div>
  	</BaseLayerWrapper>
  )
}

export default BaseLayer;