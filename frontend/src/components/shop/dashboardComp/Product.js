import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    setProducts([
      { id: 1, name: "Product 1", price: 10, description: "Description 1" },
      { id: 2, name: "Product 2", price: 20, description: "Description 2" },
      { id: 3, name: "Product 3", price: 30, description: "Description 3" },
    ]);
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleExpand = (id) => {
    setExpandedProduct(id);
  };

  const handleCollapse = () => {
    setExpandedProduct(null);
  };

  const handleUpdate = (id, name, price, description) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, name, price, description } : product
      )
    );
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Products list</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Add new Product</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ul className="list-group">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div>{product.name}</div>
                      {expandedProduct === product.id && (
                        <div>
                          <div className="form-group">
                            <label htmlFor={`name-${product.id}`}>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id={`name-${product.id}`}
                              defaultValue={product.name}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor={`price-${product.id}`}>Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`price-${product.id}`}
                              defaultValue={product.price}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor={`description-${product.id}`}>
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id={`description-${product.id}`}
                              rows="3"
                              defaultValue={product.description}
                            ></textarea>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                              handleUpdate(
                                product.id,
                                document.getElementById(`name-${product.id}`).value,
                                document.getElementById(`price-${product.id}`).value,
                                document.getElementById(`description-${product.id}`).value
                              )
                            }
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-2"
                        onClick={() =>
                          expandedProduct === product.id
                            ? handleCollapse()
                            : handleExpand(product.id)
                        }
                      >
                        {expandedProduct === product.id ? "Collapse" : "Expand"}
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
                  <label htmlFor="price">Price</label>
                  <input type="number" className="form-control" id="price" />
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