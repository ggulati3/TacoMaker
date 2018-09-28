import React from 'react';
import {ShellWrapper, Item} from './Style.jsx';

function Shell(props) {
	  return (
	  	<ShellWrapper>

	  		<h1>Choose Your Shell </h1>
	  		
	  		<div>
	  			{props.shellItems.map((category, key) =>(
                            <Item key={key} onClick = {(e) => {props.change('shells'); props.add(e);}}>{category}</Item>
                          ))}
	  		</div>
	  	</ShellWrapper>
	  );
}

export default Shell;

// <Item key={key} onClick ={props.change('shells')} onClick ={props.add}>{category}</Item>