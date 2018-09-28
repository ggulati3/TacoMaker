import styled from 'styled-components';

export const WebPage = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const NavbarWrapper = styled.nav `
	background-color: green;
	font-family: Comic Sans MS;
	font-size: 2em;
	color: yellow;
	width: 100%;
	height: 2em;
	z-index: 1;
	display:flex;
`;

export const Header = styled.div `
	padding: 10px;
	padding-right:700px;
`;

export const CheckOut = styled.div`
	padding: 10px;
	font-size: 1em;
	background-color:red;

`;

export const ShellWrapper = styled.div`
  border:solid
  width: 19%;
  height:20em;
  overflow-y: scroll;

`;

export const BaseLayerWrapper = styled.div `
	border:solid;
	align-items: stretch;
	height: 20em;
	overflow-y: scroll;
`;

export const MixingWrapper = styled.div `
	border:solid;
	width: 20%;
	height: 20em;
	overflow-y: scroll;
`;

export const SeasoningWrapper = styled.div `
	border:solid;
	width: 20%;
	height: 20em;
	overflow-y: scroll
`;

export const CondimentWrapper = styled.div `
	border:solid;
	flex-grow:1;
	align-items: stretch;
	height:20em;
	overflow-y: scroll;
`;

export const IngredientWrapper = styled.div `
	border:solid;
	flex-grow:1;
	align-items: stretch;
	font-family:Comic Sans MS;
	height: 20em;
`;

export const Item = styled.div `
	background-color: green;
	font-family:Comic Sans MS;
	font-size:36px;
	&:hover {
    	background: yellow;
  	}
`;

export const OrderItem = styled.h3 `
	font-family:Comic Sans MS;
		&:hover {
    	background: red;
  	}
`
