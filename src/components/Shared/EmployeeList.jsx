import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <div>
      <Table striped bordered hover variant="#" className="mt-5">
        <thead style={{ backgroundColor: "#2998ff" }}>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>

      <Link to="/CreateEmployee">
        <Button variant="primary" size="lg" active>
          Create Employee
        </Button>{" "}
      </Link>
      
    </div>
  );
};

export default EmployeeList;
