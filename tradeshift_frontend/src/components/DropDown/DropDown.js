import React, { useState } from 'react';
import {
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  FormGroup
 } from 'reactstrap';

 import './DropDown.scss';

 import Countries from '../../assets/countries.json';


const DropDown = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Please Select")

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const changeVal = (e) => {
    setDropdownValue(e.currentTarget.textContent)
  }

  return (
    <Col md={2}>
        <FormGroup>
            <InputGroupButtonDropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret>
                {dropdownValue}
            </DropdownToggle>
            <DropdownMenu>
              {Countries.map((country) => (
                <DropdownItem onClick={changeVal}>{country.name}</DropdownItem>
              ))}
                {/* <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem> */}
            </DropdownMenu>
            </InputGroupButtonDropdown>
        </FormGroup>  
    </Col>

  );
}


export default DropDown;