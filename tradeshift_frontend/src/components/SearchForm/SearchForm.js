import React, { useState, useEffect } from 'react';
import { Row, Button, Form, FormGroup } from 'reactstrap';
import SearchInput from '../SearchInput/SearchInput';
import DropDown from '../DropDown/DropDown';
import SearchResults from '../SearchResults/SearchResults';
import './SearchForm.scss';
import axios from 'axios';


import SearchData from '../../assets/searchResults.json';

const SearchForm = (props) => {
  const [formInput, setFormInput] = useState("");
  const [formDropdown, setFormDropdown] = useState("Please Select");
  const [countries, setCountries] = useState([])
  const [searchData, setSearchData] = useState(SearchData);
  const [resultData, setResultData] = useState([{"name": ""}]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((result) => {
      setCountries(result.data)
      console.log(result.data)
    })
   }, [])

const handleInputChange = e => {
    setFormInput(e.target.value)
  }
const handleDropdownChange = e => {
  setFormDropdown(e.currentTarget.textContent)
}

const handleSubmit = e => {
  e.preventDefault();

  let newData = []
  let filteredReturnData = []
  if(formInput === "") {
    setResultData([{"name": ""}])
    return
  }
  SearchData.map(element => {
    let split_address = element.address.split(', ')
    let code_index = split_address.length - 1
    let split_address_code = split_address[code_index].toLowerCase()
    if(formDropdown !== "Please Select") {
      if (split_address_code.toLowerCase().includes(formDropdown.toLowerCase())) {
        newData.push(element)
      }
    } else {
      newData.push(element)
    }
  })

  newData.map(element => {
    if(element.name.toLowerCase().includes(formInput.toLowerCase()) && formInput.length > 0 ) {
      filteredReturnData.push(element)
  }})

  if(filteredReturnData === [] || filteredReturnData.length === 0) {
    setResultData([{"name": "no results found"}])
  } else {
      setResultData(filteredReturnData)
  }
}

const loadingOrNot = () => {
  if (countries.length < 1 ){
  return (
    <h1>Loading...</h1>
  )
} else {
  return (
    <div>
    <Form className="formStyles" onSubmit={handleSubmit}>
        <Row form className="rowStyles">
            <DropDown formValue={formDropdown} countries={countries} handleSubmit={handleSubmit} handleChange={handleDropdownChange} />
            <SearchInput handleSubmit={handleSubmit} handleChange={handleInputChange}/>
        </Row>
    </Form>
    <SearchResults resultData={resultData} searchInput={formInput} code={formDropdown} />
</div>


  )

}}


  return (
    <div>
        {loadingOrNot()}

    </div>

  );
}

export default SearchForm;