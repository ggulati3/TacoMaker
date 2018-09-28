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
`

export const ShellWrapper = styled.div`
  border:solid
  height: 10em;
  width: 25%;
`;

export const BaseLayerWrapper = styled.div `
	border:solid;
	width: 50%;
`;

export const MixingWrapper = styled.div `
	border:solid;
	width:25%;
`;

export const SeasoningWrapper = styled.div `
	border:solid;
	width: 50%;
`;

export const CondimentWrapper = styled.div `
	border:solid;
	width:75.5%;
`;

export const IngredientWrapper = styled.div `
	border:solid;
	flex-grow:1;
	align-items: stretch;
	height: 10em;
`;

export const Item = styled.div `
	background-color: green;
`