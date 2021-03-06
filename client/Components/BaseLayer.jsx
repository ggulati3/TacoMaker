import React from 'react';
import { BaseLayerWrapper, Item } from './Style.jsx';

function BaseLayer(props) {
  return (
  	<BaseLayerWrapper>
  		<h1>Choose One Base Layer</h1>
  		<div>
	  		{props.baseLayerItems.map((category, key) =>(
                <Item key={key} onClick = {(e) => {props.change('baseLayers'); props.add(e);}}>{category}</Item>
            ))}
	  	</div>
  	</BaseLayerWrapper>
  )
}

export default BaseLayer;