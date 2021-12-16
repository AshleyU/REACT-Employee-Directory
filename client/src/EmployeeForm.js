import React from 'react';
import {useState} from 'react';
import { Form } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
import { InputGroup, Row, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Col } from 'reactstrap';
import Axios from 'axios';

function EmployeeForm(props) {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);
  const [newSalary, setNewSalary] = useState(0);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      position: position, 
      email: email, 
      salary: salary, 
    }).then(() => {
      console.log("Success");
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
  }

  const updateSalary = (id) => {
    Axios.put('http://localhost:3001/update', {
      salary: newSalary,
      id: id
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: val.name,
                position: val.position,
                email: val.email,
                salary: newSalary,
              }
            : val;
          })
        );
      } 
    );
  };

  return (
    <div className="information">
    <Row>
      <Col
        className="bg-light border"
        sm={{
        offset: 1,
        size: 4
      }}
      >
        <h4>Add New Employee</h4>
          <div className="form col-6">
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
                <Button onClick={addEmployee} color="primary" outline size="sm">
                  Add Employee
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col
          className="bg-light border"
          sm={{
        offset: 1,
        size: 5
      }}
        >
        <h4>Employees</h4>
          <div className="showEmployees">
            {employeeList.map((val, key) => {
              return <div className="employee">
                <Card id="employee-card">
                  <CardBody>
                    <CardTitle tag="h5">
                      {val.name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {val.position}
                    </CardSubtitle>
                    <CardText tag="h6" id="more-info">
                      Email: {val.email} <br/>
                      Salary: {val.salary}
                    </CardText>
                    <Input
                      bsSize="sm"
                      className="mb-3"
                      placeholder="Change Salary"
                      onChange={(event) => {
                        setNewSalary(event.target.value);
                      }}
                    />
                    <Button onClick={()=>{updateSalary(val.id)}}color="secondary" outline size="sm">
                      Update Salary
                    </Button>
                    <Button color="danger" outline size="sm" id="delete-employees-btn">Delete Employee</Button>
                  </CardBody>
                </Card>
              </div>
            })}
          </div>
          <Button onClick={getEmployees} color="primary" outline size="sm" id="show-employees-btn">Show Employees</Button>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeForm;
