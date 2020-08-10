import React, { useState } from 'react';
import { Row, Button, Form, FormGroup } from 'reactstrap';
import SearchInput from '../SearchInput/SearchInput';
import DropDown from '../DropDown/DropDown';
import SearchResults from '../SearchResults/SearchResults';
import './SearchForm.scss';

import SearchData from '../../assets/searchResults.json';

const SearchForm = (props) => {
  const [formInput, setFormInput] = useState("");
  const [formDropdown, setFormDropdown] = useState("Please Select");
  const [resultData, setResultData] = useState([{"name": ""}]);

const handleInputChange = e => {
    setFormInput(e.target.value)
  }
const handleDropdownChange = e => {
  setFormDropdown(e.currentTarget.textContent)
}

const handleSubmit = e => {
  e.preventDefault();
  let newData = []
  SearchData.map(element => {
    console.log(element.address)
    let split_address = element.address.split(', ')
    let code_index = split_address.length - 1
    console.log(split_address[code_index])

    let split_address_code = split_address[code_index].toLowerCase()

    if(element.country.toLowerCase().includes(formInput.toLocaleLowerCase()) || split_address_code == formDropdown.toLowerCase()){
      newData.push(element)
    }
  })
  if(newData === [] || newData.length === 0) {
    setResultData([{"name": "no results found"}])
  } else {
      setResultData(newData)
  }
}

  return (
    <div>
      <Form className="formStyles">
          <Row form className="rowStyles">
              <DropDown formValue={formDropdown} handleChange={handleDropdownChange} />
              <SearchInput handleSubmit={handleSubmit} handleChange={handleInputChange}/>
          </Row>
      </Form>
      <SearchResults resultData={resultData} />
    </div>
  );
}

export default SearchForm;