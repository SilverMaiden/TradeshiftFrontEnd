import React, { useState } from 'react';
import AppIcon from '../../assets/app-icon.svg';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> 
            <img src={AppIcon} alt="app icon" /> 
            Tradeshift Search
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;