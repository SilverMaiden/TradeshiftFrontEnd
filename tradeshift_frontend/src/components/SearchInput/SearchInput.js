import React from 'react';
import { Col, FormGroup, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap';

const SearchInput = (props) => {
  return (
        <Col sm={6}>
          <FormGroup>
            <InputGroup>
            <Input type="text" name="zip" id="exampleZip"/>
              <InputGroupAddon addonType="append">
                <Button >search</Button>
              </InputGroupAddon>
            </InputGroup>

          </FormGroup>  
        </Col>
  );
}

export default SearchInput;