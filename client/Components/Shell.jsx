import React from 'react';
import {ShellWrapper, Item} from './Style.jsx';

function Shell(props) {
	  return (
	  	<ShellWrapper>
	  		<h1>Choose Your Shell</h1>
	  		{props.shellItems.forEach( item ) => {return <Item>item<Item>}}
	  	</ShellWrapper>
	  );
}

export default Shell;