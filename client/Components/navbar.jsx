import React from 'react';
import { NavbarWrapper, Header, CheckOut } from './Style.jsx';


function Navbar(props){

  return (
    <NavbarWrapper>
      <Header>Company X Tacos!</Header>
      <CheckOut onClick={props.fillOrder}>Click to Complete Order</CheckOut>
    </NavbarWrapper>
  );
}

export default Navbar;
