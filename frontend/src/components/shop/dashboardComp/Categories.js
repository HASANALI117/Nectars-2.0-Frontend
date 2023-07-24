import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // axios.get("/api/categories").then((response) => {
    //   setCategories(response.data);
    // });
    setCategories([
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
    ]);
  }, []);

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Categories list</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Add new Category</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ul className="list-group">
                {categories.map((category) => (
                  <li key={category.id} className="list-group-item d-flex">
                    <div className="flex-grow-1">{category.name}</div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleDelete(category.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-2"
                      >
                        Edit
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}