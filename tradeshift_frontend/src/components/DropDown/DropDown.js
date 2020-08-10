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
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Col md={2}>
        <FormGroup>
            <InputGroupButtonDropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret>
                {props.formValue}
            </DropdownToggle>
            <DropdownMenu>
              {Countries.map((country) => (
                <DropdownItem onClick={props.handleChange}>{country.code}</DropdownItem>
              ))}
            </DropdownMenu>
            </InputGroupButtonDropdown>
        </FormGroup>  
    </Col>
  );
}


export default DropDown;