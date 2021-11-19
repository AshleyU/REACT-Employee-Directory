import React from 'react';
import { Form } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { Col } from 'reactstrap';

function EmployeeForm() {
  return (
    <div className="information">
        <Col
        className="bg-light border"
        md={{
          offset: 3,
          size: 6
        }}
        sm="12"
        >
          <div className="form">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">
                  Name
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">
                  Position
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">
                  Email
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">
                  Years in Service
                </Label>
                <InputGroup>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="number placeholder"
                    type="number"
                  />
                  <InputGroupText>
                    @example.com
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">
                  Salary
                </Label>
                <InputGroup>
                  <InputGroupText>
                    $
                  </InputGroupText>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="number placeholder"
                    type="number"
                  />
                </InputGroup>           
              </FormGroup>
              <div className="submitButton">
                <Button color="primary" outline size="sm">
                  Add Employee
                </Button>
              </div>
            </Form>
          </div>
        </Col>
    </div>
  );
}

export default EmployeeForm;
