import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import BACKEND_URL from "../../../constants";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    console.log("props.shopId", props.shopId);
    const token = localStorage.getItem("access");
    axios
      .get(`${BACKEND_URL}/categories/shop/${props.shopId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        if (response.data.length === 0) {
          setCategory(null);
          setCategories([]);
        } else {
          setCategory(response.data[0].categoryId);
          setCategories(response.data);
        }
      });
  }, []);

  useEffect(() => {
    console.log("category", category);
  }, [category]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shopProducts/${props.shopId}/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const posterImageUrl = e.target.posterImageUrl.value;
    const productImageUrls = e.target.productImageUrls.value.split("\n");

    // Save the data to the database using Axios call
    const productData = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      categoryId: category,
      poster_image_url: posterImageUrl,
      image_urls: productImageUrls,
    };

    console.log(productData);

    axios
      .post(`${BACKEND_URL}/products/create/`, productData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setProducts([...products, productData]);
      })
      .catch((err) => {
        console.log(err);
      });
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
                                document.getElementById(`name-${product.id}`)
                                  .value,
                                document.getElementById(`price-${product.id}`)
                                  .value,
                                document.getElementById(
                                  `description-${product.id}`
                                ).value
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
              <form onSubmit={handleSubmit}>
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
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-control"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {/* Generate options for each category */}
                    {categories.map((category) => (
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="posterImageUrl">Poster Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="posterImageUrl"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productImageUrls">Product Image URLs</label>
                  <textarea
                    className="form-control"
                    id="productImageUrls"
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
