import React from 'react';
import {useState} from 'react';
import { Form } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { Col } from 'reactstrap';

function EmployeeForm() {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [years, setYears] = useState(0);
  const [salary, setSalary] = useState(0);

  const displayInfo = () => {
    console.log(name + " " + position + " " + email + " " + years + " " + salary);
  }

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
                <Label for="name">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  onChange={(event) => {
                    setName(event.target.value);
                    }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="position">
                  Position
                </Label>
                <Input
                  id="position"
                  name="position"
                  type="position"
                  onChange={(event) => {
                    setPosition(event.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
              </FormGroup>
              <FormGroup>
                <Label for="yearsInService">
                  Years in Service
                </Label>
                  <Input
                    id="yearsInService"
                    name="yearsInService"
                    type="number"
                    onChange={(event) => {
                      setYears(event.target.value);
                    }}
                  />
              </FormGroup>
              <FormGroup>
                <Label for="salary">
                  Salary
                </Label>
                <InputGroup>
                  <InputGroupText>
                    $
                  </InputGroupText>
                  <Input
                    id="salary"
                    name="salary"
                    type="number"
                    onChange={(event) => {
                      setSalary(event.target.value);
                    }}
                  />
                </InputGroup>           
              </FormGroup>
              <div className="submitButton">
                <Button color="primary" outline size="sm" onClick={displayInfo}>
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
