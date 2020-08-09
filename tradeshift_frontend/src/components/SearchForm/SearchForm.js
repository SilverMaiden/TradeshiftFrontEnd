import React from 'react';
import { Row, Button, Form, FormGroup } from 'reactstrap';
import SearchInput from '../SearchInput/SearchInput';
import DropDown from '../DropDown/DropDown';
import './SearchForm.scss';


const SearchForm = (props) => {
  return (
    <Form className="formStyles">
        <Row form className="rowStyles">
            <DropDown />
            <SearchInput />
        </Row>
    </Form>
  );
}

export default SearchForm;