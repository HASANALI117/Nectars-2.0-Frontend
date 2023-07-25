import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    setUsers([
      { id: 1, name: "user 1"},
      { id: 2, name: "user 2"},
      { id: 3, name: "user 3"},
    ]);
  }, []);

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Users list</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="second">Add new Product</Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <ul className="list-group">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div>{user.name}</div>
                      </div>
                  </li>
                ))}
              </ul>
            </Tab.Pane>
            {/* <Tab.Pane eventKey="second">add product form</Tab.Pane> */}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
